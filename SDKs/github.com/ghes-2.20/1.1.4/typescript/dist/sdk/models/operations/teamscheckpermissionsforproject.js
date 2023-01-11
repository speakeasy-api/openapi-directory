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
exports.TeamsCheckPermissionsForProjectResponse = exports.TeamsCheckPermissionsForProjectRequest = exports.TeamsCheckPermissionsForProjectHeaders = exports.TeamsCheckPermissionsForProjectPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var TeamsCheckPermissionsForProjectPathParams = /** @class */ (function (_super) {
    __extends(TeamsCheckPermissionsForProjectPathParams, _super);
    function TeamsCheckPermissionsForProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", Number)
    ], TeamsCheckPermissionsForProjectPathParams.prototype, "projectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=team_id" }),
        __metadata("design:type", Number)
    ], TeamsCheckPermissionsForProjectPathParams.prototype, "teamId", void 0);
    return TeamsCheckPermissionsForProjectPathParams;
}(utils_1.SpeakeasyBase));
exports.TeamsCheckPermissionsForProjectPathParams = TeamsCheckPermissionsForProjectPathParams;
var TeamsCheckPermissionsForProjectHeaders = /** @class */ (function (_super) {
    __extends(TeamsCheckPermissionsForProjectHeaders, _super);
    function TeamsCheckPermissionsForProjectHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=accept" }),
        __metadata("design:type", String)
    ], TeamsCheckPermissionsForProjectHeaders.prototype, "accept", void 0);
    return TeamsCheckPermissionsForProjectHeaders;
}(utils_1.SpeakeasyBase));
exports.TeamsCheckPermissionsForProjectHeaders = TeamsCheckPermissionsForProjectHeaders;
var TeamsCheckPermissionsForProjectRequest = /** @class */ (function (_super) {
    __extends(TeamsCheckPermissionsForProjectRequest, _super);
    function TeamsCheckPermissionsForProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TeamsCheckPermissionsForProjectPathParams)
    ], TeamsCheckPermissionsForProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TeamsCheckPermissionsForProjectHeaders)
    ], TeamsCheckPermissionsForProjectRequest.prototype, "headers", void 0);
    return TeamsCheckPermissionsForProjectRequest;
}(utils_1.SpeakeasyBase));
exports.TeamsCheckPermissionsForProjectRequest = TeamsCheckPermissionsForProjectRequest;
var TeamsCheckPermissionsForProjectResponse = /** @class */ (function (_super) {
    __extends(TeamsCheckPermissionsForProjectResponse, _super);
    function TeamsCheckPermissionsForProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TeamsCheckPermissionsForProjectResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TeamsCheckPermissionsForProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.TeamProject)
    ], TeamsCheckPermissionsForProjectResponse.prototype, "teamProject", void 0);
    return TeamsCheckPermissionsForProjectResponse;
}(utils_1.SpeakeasyBase));
exports.TeamsCheckPermissionsForProjectResponse = TeamsCheckPermissionsForProjectResponse;
