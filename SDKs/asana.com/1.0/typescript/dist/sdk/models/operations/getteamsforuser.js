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
exports.GetTeamsForUserResponse = exports.GetTeamsForUserRequest = exports.GetTeamsForUser200ApplicationJson = exports.GetTeamsForUserQueryParams = exports.GetTeamsForUserPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetTeamsForUserPathParams = /** @class */ (function (_super) {
    __extends(GetTeamsForUserPathParams, _super);
    function GetTeamsForUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=user_gid" }),
        __metadata("design:type", String)
    ], GetTeamsForUserPathParams.prototype, "userGid", void 0);
    return GetTeamsForUserPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTeamsForUserPathParams = GetTeamsForUserPathParams;
var GetTeamsForUserQueryParams = /** @class */ (function (_super) {
    __extends(GetTeamsForUserQueryParams, _super);
    function GetTeamsForUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetTeamsForUserQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], GetTeamsForUserQueryParams.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetTeamsForUserQueryParams.prototype, "optFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetTeamsForUserQueryParams.prototype, "optPretty", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=organization" }),
        __metadata("design:type", String)
    ], GetTeamsForUserQueryParams.prototype, "organization", void 0);
    return GetTeamsForUserQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetTeamsForUserQueryParams = GetTeamsForUserQueryParams;
var GetTeamsForUser200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTeamsForUser200ApplicationJson, _super);
    function GetTeamsForUser200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.TeamCompact }),
        __metadata("design:type", Array)
    ], GetTeamsForUser200ApplicationJson.prototype, "data", void 0);
    return GetTeamsForUser200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetTeamsForUser200ApplicationJson = GetTeamsForUser200ApplicationJson;
var GetTeamsForUserRequest = /** @class */ (function (_super) {
    __extends(GetTeamsForUserRequest, _super);
    function GetTeamsForUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTeamsForUserPathParams)
    ], GetTeamsForUserRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTeamsForUserQueryParams)
    ], GetTeamsForUserRequest.prototype, "queryParams", void 0);
    return GetTeamsForUserRequest;
}(utils_1.SpeakeasyBase));
exports.GetTeamsForUserRequest = GetTeamsForUserRequest;
var GetTeamsForUserResponse = /** @class */ (function (_super) {
    __extends(GetTeamsForUserResponse, _super);
    function GetTeamsForUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTeamsForUserResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetTeamsForUserResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTeamsForUserResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTeamsForUser200ApplicationJson)
    ], GetTeamsForUserResponse.prototype, "getTeamsForUser200ApplicationJSONObject", void 0);
    return GetTeamsForUserResponse;
}(utils_1.SpeakeasyBase));
exports.GetTeamsForUserResponse = GetTeamsForUserResponse;
