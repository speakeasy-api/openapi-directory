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
exports.GetDockerCredentialsResponse = exports.GetDockerCredentialsRequest = exports.GetDockerCredentials401ApplicationJson = exports.GetDockerCredentials200ApplicationJson = exports.GetDockerCredentials200ApplicationJsonAuths = exports.GetDockerCredentials200ApplicationJsonAuthsRegistryDigitaloceanCom = exports.GetDockerCredentialsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetDockerCredentialsQueryParams = /** @class */ (function (_super) {
    __extends(GetDockerCredentialsQueryParams, _super);
    function GetDockerCredentialsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=expiry_seconds" }),
        __metadata("design:type", Number)
    ], GetDockerCredentialsQueryParams.prototype, "expirySeconds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=read_write" }),
        __metadata("design:type", Boolean)
    ], GetDockerCredentialsQueryParams.prototype, "readWrite", void 0);
    return GetDockerCredentialsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetDockerCredentialsQueryParams = GetDockerCredentialsQueryParams;
var GetDockerCredentials200ApplicationJsonAuthsRegistryDigitaloceanCom = /** @class */ (function (_super) {
    __extends(GetDockerCredentials200ApplicationJsonAuthsRegistryDigitaloceanCom, _super);
    function GetDockerCredentials200ApplicationJsonAuthsRegistryDigitaloceanCom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auth" }),
        __metadata("design:type", String)
    ], GetDockerCredentials200ApplicationJsonAuthsRegistryDigitaloceanCom.prototype, "auth", void 0);
    return GetDockerCredentials200ApplicationJsonAuthsRegistryDigitaloceanCom;
}(utils_1.SpeakeasyBase));
exports.GetDockerCredentials200ApplicationJsonAuthsRegistryDigitaloceanCom = GetDockerCredentials200ApplicationJsonAuthsRegistryDigitaloceanCom;
var GetDockerCredentials200ApplicationJsonAuths = /** @class */ (function (_super) {
    __extends(GetDockerCredentials200ApplicationJsonAuths, _super);
    function GetDockerCredentials200ApplicationJsonAuths() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registry.digitalocean.com" }),
        __metadata("design:type", GetDockerCredentials200ApplicationJsonAuthsRegistryDigitaloceanCom)
    ], GetDockerCredentials200ApplicationJsonAuths.prototype, "registryDigitaloceanCom", void 0);
    return GetDockerCredentials200ApplicationJsonAuths;
}(utils_1.SpeakeasyBase));
exports.GetDockerCredentials200ApplicationJsonAuths = GetDockerCredentials200ApplicationJsonAuths;
var GetDockerCredentials200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDockerCredentials200ApplicationJson, _super);
    function GetDockerCredentials200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=auths" }),
        __metadata("design:type", GetDockerCredentials200ApplicationJsonAuths)
    ], GetDockerCredentials200ApplicationJson.prototype, "auths", void 0);
    return GetDockerCredentials200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDockerCredentials200ApplicationJson = GetDockerCredentials200ApplicationJson;
var GetDockerCredentials401ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDockerCredentials401ApplicationJson, _super);
    function GetDockerCredentials401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetDockerCredentials401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetDockerCredentials401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetDockerCredentials401ApplicationJson.prototype, "requestId", void 0);
    return GetDockerCredentials401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetDockerCredentials401ApplicationJson = GetDockerCredentials401ApplicationJson;
var GetDockerCredentialsRequest = /** @class */ (function (_super) {
    __extends(GetDockerCredentialsRequest, _super);
    function GetDockerCredentialsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDockerCredentialsQueryParams)
    ], GetDockerCredentialsRequest.prototype, "queryParams", void 0);
    return GetDockerCredentialsRequest;
}(utils_1.SpeakeasyBase));
exports.GetDockerCredentialsRequest = GetDockerCredentialsRequest;
var GetDockerCredentialsResponse = /** @class */ (function (_super) {
    __extends(GetDockerCredentialsResponse, _super);
    function GetDockerCredentialsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetDockerCredentialsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetDockerCredentialsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetDockerCredentialsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDockerCredentials200ApplicationJson)
    ], GetDockerCredentialsResponse.prototype, "getDockerCredentials200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetDockerCredentials401ApplicationJson)
    ], GetDockerCredentialsResponse.prototype, "getDockerCredentials401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], GetDockerCredentialsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return GetDockerCredentialsResponse;
}(utils_1.SpeakeasyBase));
exports.GetDockerCredentialsResponse = GetDockerCredentialsResponse;
