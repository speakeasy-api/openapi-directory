"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsListProjectsLegacyResponse = exports.TeamsListProjectsLegacyRequest = exports.TeamsListProjectsLegacy415ApplicationJson = exports.TeamsListProjectsLegacyQueryParams = exports.TeamsListProjectsLegacyPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TeamsListProjectsLegacyPathParams = /** @class */ (function (_super) {
    __extends(TeamsListProjectsLegacyPathParams, _super);
    function TeamsListProjectsLegacyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], TeamsListProjectsLegacyPathParams.prototype, "teamId", void 0);
    return TeamsListProjectsLegacyPathParams;
}(utils_1.SpeakeasyBase));
exports.TeamsListProjectsLegacyPathParams = TeamsListProjectsLegacyPathParams;
var TeamsListProjectsLegacyQueryParams = /** @class */ (function (_super) {
    __extends(TeamsListProjectsLegacyQueryParams, _super);
    function TeamsListProjectsLegacyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], TeamsListProjectsLegacyQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], TeamsListProjectsLegacyQueryParams.prototype, "perPage", void 0);
    return TeamsListProjectsLegacyQueryParams;
}(utils_1.SpeakeasyBase));
exports.TeamsListProjectsLegacyQueryParams = TeamsListProjectsLegacyQueryParams;
var TeamsListProjectsLegacy415ApplicationJson = /** @class */ (function (_super) {
    __extends(TeamsListProjectsLegacy415ApplicationJson, _super);
    function TeamsListProjectsLegacy415ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=documentation_url" }),
        __metadata("design:type", String)
    ], TeamsListProjectsLegacy415ApplicationJson.prototype, "documentationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], TeamsListProjectsLegacy415ApplicationJson.prototype, "message", void 0);
    return TeamsListProjectsLegacy415ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.TeamsListProjectsLegacy415ApplicationJson = TeamsListProjectsLegacy415ApplicationJson;
var TeamsListProjectsLegacyRequest = /** @class */ (function (_super) {
    __extends(TeamsListProjectsLegacyRequest, _super);
    function TeamsListProjectsLegacyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TeamsListProjectsLegacyPathParams)
    ], TeamsListProjectsLegacyRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TeamsListProjectsLegacyQueryParams)
    ], TeamsListProjectsLegacyRequest.prototype, "queryParams", void 0);
    return TeamsListProjectsLegacyRequest;
}(utils_1.SpeakeasyBase));
exports.TeamsListProjectsLegacyRequest = TeamsListProjectsLegacyRequest;
var TeamsListProjectsLegacyResponse = /** @class */ (function (_super) {
    __extends(TeamsListProjectsLegacyResponse, _super);
    function TeamsListProjectsLegacyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TeamsListProjectsLegacyResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], TeamsListProjectsLegacyResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TeamsListProjectsLegacyResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.BasicError)
    ], TeamsListProjectsLegacyResponse.prototype, "basicError", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.TeamProject }),
        __metadata("design:type", Array)
    ], TeamsListProjectsLegacyResponse.prototype, "teamProjects", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TeamsListProjectsLegacy415ApplicationJson)
    ], TeamsListProjectsLegacyResponse.prototype, "teamsListProjectsLegacy415ApplicationJSONObject", void 0);
    return TeamsListProjectsLegacyResponse;
}(utils_1.SpeakeasyBase));
exports.TeamsListProjectsLegacyResponse = TeamsListProjectsLegacyResponse;
