"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.PostRemoteServersIdConfigurationFileResponse = exports.PostRemoteServersIdConfigurationFileRequest = exports.PostRemoteServersIdConfigurationFileRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostRemoteServersIdConfigurationFileRequestBody = /** @class */ (function (_super) {
    __extends(PostRemoteServersIdConfigurationFileRequestBody, _super);
    function PostRemoteServersIdConfigurationFileRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=api_token" }),
        __metadata("design:type", String)
    ], PostRemoteServersIdConfigurationFileRequestBody.prototype, "apiToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=config_version" }),
        __metadata("design:type", String)
    ], PostRemoteServersIdConfigurationFileRequestBody.prototype, "configVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=hostname" }),
        __metadata("design:type", String)
    ], PostRemoteServersIdConfigurationFileRequestBody.prototype, "hostname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=permission_set" }),
        __metadata("design:type", String)
    ], PostRemoteServersIdConfigurationFileRequestBody.prototype, "permissionSet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=port" }),
        __metadata("design:type", Number)
    ], PostRemoteServersIdConfigurationFileRequestBody.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=private_key" }),
        __metadata("design:type", String)
    ], PostRemoteServersIdConfigurationFileRequestBody.prototype, "privateKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=public_key" }),
        __metadata("design:type", String)
    ], PostRemoteServersIdConfigurationFileRequestBody.prototype, "publicKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=root" }),
        __metadata("design:type", String)
    ], PostRemoteServersIdConfigurationFileRequestBody.prototype, "root", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=server_host_key" }),
        __metadata("design:type", String)
    ], PostRemoteServersIdConfigurationFileRequestBody.prototype, "serverHostKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=status" }),
        __metadata("design:type", String)
    ], PostRemoteServersIdConfigurationFileRequestBody.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=subdomain" }),
        __metadata("design:type", String)
    ], PostRemoteServersIdConfigurationFileRequestBody.prototype, "subdomain", void 0);
    return PostRemoteServersIdConfigurationFileRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostRemoteServersIdConfigurationFileRequestBody = PostRemoteServersIdConfigurationFileRequestBody;
var PostRemoteServersIdConfigurationFileRequest = /** @class */ (function (_super) {
    __extends(PostRemoteServersIdConfigurationFileRequest, _super);
    function PostRemoteServersIdConfigurationFileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostRemoteServersIdConfigurationFileRequestBody)
    ], PostRemoteServersIdConfigurationFileRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PostRemoteServersIdConfigurationFileRequest.prototype, "id", void 0);
    return PostRemoteServersIdConfigurationFileRequest;
}(utils_1.SpeakeasyBase));
exports.PostRemoteServersIdConfigurationFileRequest = PostRemoteServersIdConfigurationFileRequest;
var PostRemoteServersIdConfigurationFileResponse = /** @class */ (function (_super) {
    __extends(PostRemoteServersIdConfigurationFileResponse, _super);
    function PostRemoteServersIdConfigurationFileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostRemoteServersIdConfigurationFileResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.RemoteServerConfigurationFileEntity)
    ], PostRemoteServersIdConfigurationFileResponse.prototype, "remoteServerConfigurationFileEntity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostRemoteServersIdConfigurationFileResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostRemoteServersIdConfigurationFileResponse.prototype, "rawResponse", void 0);
    return PostRemoteServersIdConfigurationFileResponse;
}(utils_1.SpeakeasyBase));
exports.PostRemoteServersIdConfigurationFileResponse = PostRemoteServersIdConfigurationFileResponse;
