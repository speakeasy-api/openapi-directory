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
exports.GetFavoritesForUserResponse = exports.GetFavoritesForUserRequest = exports.GetFavoritesForUser200ApplicationJson = exports.GetFavoritesForUserQueryParams = exports.GetFavoritesForUserPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetFavoritesForUserPathParams = /** @class */ (function (_super) {
    __extends(GetFavoritesForUserPathParams, _super);
    function GetFavoritesForUserPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=user_gid" }),
        __metadata("design:type", String)
    ], GetFavoritesForUserPathParams.prototype, "userGid", void 0);
    return GetFavoritesForUserPathParams;
}(utils_1.SpeakeasyBase));
exports.GetFavoritesForUserPathParams = GetFavoritesForUserPathParams;
var GetFavoritesForUserQueryParams = /** @class */ (function (_super) {
    __extends(GetFavoritesForUserQueryParams, _super);
    function GetFavoritesForUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=opt_fields" }),
        __metadata("design:type", Array)
    ], GetFavoritesForUserQueryParams.prototype, "optFields", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=opt_pretty" }),
        __metadata("design:type", Boolean)
    ], GetFavoritesForUserQueryParams.prototype, "optPretty", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=resource_type" }),
        __metadata("design:type", String)
    ], GetFavoritesForUserQueryParams.prototype, "resourceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=workspace" }),
        __metadata("design:type", String)
    ], GetFavoritesForUserQueryParams.prototype, "workspace", void 0);
    return GetFavoritesForUserQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetFavoritesForUserQueryParams = GetFavoritesForUserQueryParams;
var GetFavoritesForUser200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetFavoritesForUser200ApplicationJson, _super);
    function GetFavoritesForUser200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.AsanaNamedResource }),
        __metadata("design:type", Array)
    ], GetFavoritesForUser200ApplicationJson.prototype, "data", void 0);
    return GetFavoritesForUser200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetFavoritesForUser200ApplicationJson = GetFavoritesForUser200ApplicationJson;
var GetFavoritesForUserRequest = /** @class */ (function (_super) {
    __extends(GetFavoritesForUserRequest, _super);
    function GetFavoritesForUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFavoritesForUserPathParams)
    ], GetFavoritesForUserRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFavoritesForUserQueryParams)
    ], GetFavoritesForUserRequest.prototype, "queryParams", void 0);
    return GetFavoritesForUserRequest;
}(utils_1.SpeakeasyBase));
exports.GetFavoritesForUserRequest = GetFavoritesForUserRequest;
var GetFavoritesForUserResponse = /** @class */ (function (_super) {
    __extends(GetFavoritesForUserResponse, _super);
    function GetFavoritesForUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetFavoritesForUserResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], GetFavoritesForUserResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetFavoritesForUserResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetFavoritesForUser200ApplicationJson)
    ], GetFavoritesForUserResponse.prototype, "getFavoritesForUser200ApplicationJSONObject", void 0);
    return GetFavoritesForUserResponse;
}(utils_1.SpeakeasyBase));
exports.GetFavoritesForUserResponse = GetFavoritesForUserResponse;
