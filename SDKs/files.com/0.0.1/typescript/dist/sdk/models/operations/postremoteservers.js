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
exports.PostRemoteServersResponse = exports.PostRemoteServersRequest = exports.PostRemoteServersRequestBody = exports.PostRemoteServersRequestBodySslEnum = exports.PostRemoteServersRequestBodyServerTypeEnum = exports.PostRemoteServersRequestBodyServerCertificateEnum = exports.PostRemoteServersRequestBodyOneDriveAccountTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostRemoteServersRequestBodyOneDriveAccountTypeEnum;
(function (PostRemoteServersRequestBodyOneDriveAccountTypeEnum) {
    PostRemoteServersRequestBodyOneDriveAccountTypeEnum["Personal"] = "personal";
    PostRemoteServersRequestBodyOneDriveAccountTypeEnum["BusinessOther"] = "business_other";
})(PostRemoteServersRequestBodyOneDriveAccountTypeEnum = exports.PostRemoteServersRequestBodyOneDriveAccountTypeEnum || (exports.PostRemoteServersRequestBodyOneDriveAccountTypeEnum = {}));
var PostRemoteServersRequestBodyServerCertificateEnum;
(function (PostRemoteServersRequestBodyServerCertificateEnum) {
    PostRemoteServersRequestBodyServerCertificateEnum["RequireMatch"] = "require_match";
    PostRemoteServersRequestBodyServerCertificateEnum["AllowAny"] = "allow_any";
})(PostRemoteServersRequestBodyServerCertificateEnum = exports.PostRemoteServersRequestBodyServerCertificateEnum || (exports.PostRemoteServersRequestBodyServerCertificateEnum = {}));
var PostRemoteServersRequestBodyServerTypeEnum;
(function (PostRemoteServersRequestBodyServerTypeEnum) {
    PostRemoteServersRequestBodyServerTypeEnum["Ftp"] = "ftp";
    PostRemoteServersRequestBodyServerTypeEnum["Sftp"] = "sftp";
    PostRemoteServersRequestBodyServerTypeEnum["S3"] = "s3";
    PostRemoteServersRequestBodyServerTypeEnum["GoogleCloudStorage"] = "google_cloud_storage";
    PostRemoteServersRequestBodyServerTypeEnum["Webdav"] = "webdav";
    PostRemoteServersRequestBodyServerTypeEnum["Wasabi"] = "wasabi";
    PostRemoteServersRequestBodyServerTypeEnum["BackblazeB2"] = "backblaze_b2";
    PostRemoteServersRequestBodyServerTypeEnum["OneDrive"] = "one_drive";
    PostRemoteServersRequestBodyServerTypeEnum["Rackspace"] = "rackspace";
    PostRemoteServersRequestBodyServerTypeEnum["Box"] = "box";
    PostRemoteServersRequestBodyServerTypeEnum["Dropbox"] = "dropbox";
    PostRemoteServersRequestBodyServerTypeEnum["GoogleDrive"] = "google_drive";
    PostRemoteServersRequestBodyServerTypeEnum["Azure"] = "azure";
    PostRemoteServersRequestBodyServerTypeEnum["Sharepoint"] = "sharepoint";
    PostRemoteServersRequestBodyServerTypeEnum["S3Compatible"] = "s3_compatible";
})(PostRemoteServersRequestBodyServerTypeEnum = exports.PostRemoteServersRequestBodyServerTypeEnum || (exports.PostRemoteServersRequestBodyServerTypeEnum = {}));
var PostRemoteServersRequestBodySslEnum;
(function (PostRemoteServersRequestBodySslEnum) {
    PostRemoteServersRequestBodySslEnum["IfAvailable"] = "if_available";
    PostRemoteServersRequestBodySslEnum["Require"] = "require";
    PostRemoteServersRequestBodySslEnum["RequireImplicit"] = "require_implicit";
    PostRemoteServersRequestBodySslEnum["Never"] = "never";
})(PostRemoteServersRequestBodySslEnum = exports.PostRemoteServersRequestBodySslEnum || (exports.PostRemoteServersRequestBodySslEnum = {}));
var PostRemoteServersRequestBody = /** @class */ (function (_super) {
    __extends(PostRemoteServersRequestBody, _super);
    function PostRemoteServersRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=aws_access_key" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "awsAccessKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=aws_secret_key" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "awsSecretKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=azure_blob_storage_access_key" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "azureBlobStorageAccessKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=azure_blob_storage_account" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "azureBlobStorageAccount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=azure_blob_storage_container" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "azureBlobStorageContainer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=backblaze_b2_application_key" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "backblazeB2ApplicationKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=backblaze_b2_bucket" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "backblazeB2Bucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=backblaze_b2_key_id" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "backblazeB2KeyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=backblaze_b2_s3_endpoint" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "backblazeB2S3Endpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=enable_dedicated_ips" }),
        __metadata("design:type", Boolean)
    ], PostRemoteServersRequestBody.prototype, "enableDedicatedIps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=google_cloud_storage_bucket" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "googleCloudStorageBucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=google_cloud_storage_credentials_json" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "googleCloudStorageCredentialsJson", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=google_cloud_storage_project_id" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "googleCloudStorageProjectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=hostname" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "hostname", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=max_connections" }),
        __metadata("design:type", Number)
    ], PostRemoteServersRequestBody.prototype, "maxConnections", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=one_drive_account_type" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "oneDriveAccountType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=password" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "password", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=port" }),
        __metadata("design:type", Number)
    ], PostRemoteServersRequestBody.prototype, "port", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=private_key" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "privateKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=rackspace_api_key" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "rackspaceApiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=rackspace_container" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "rackspaceContainer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=rackspace_region" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "rackspaceRegion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=rackspace_username" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "rackspaceUsername", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=reset_authentication" }),
        __metadata("design:type", Boolean)
    ], PostRemoteServersRequestBody.prototype, "resetAuthentication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=s3_bucket" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "s3Bucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=s3_compatible_access_key" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "s3CompatibleAccessKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=s3_compatible_bucket" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "s3CompatibleBucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=s3_compatible_endpoint" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "s3CompatibleEndpoint", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=s3_compatible_region" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "s3CompatibleRegion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=s3_compatible_secret_key" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "s3CompatibleSecretKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=s3_region" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "s3Region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=server_certificate" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "serverCertificate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=server_host_key" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "serverHostKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=server_type" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "serverType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=ssl" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "ssl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=ssl_certificate" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "sslCertificate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=username" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "username", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=wasabi_access_key" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "wasabiAccessKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=wasabi_bucket" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "wasabiBucket", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=wasabi_region" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "wasabiRegion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=wasabi_secret_key" }),
        __metadata("design:type", String)
    ], PostRemoteServersRequestBody.prototype, "wasabiSecretKey", void 0);
    return PostRemoteServersRequestBody;
}(utils_1.SpeakeasyBase));
exports.PostRemoteServersRequestBody = PostRemoteServersRequestBody;
var PostRemoteServersRequest = /** @class */ (function (_super) {
    __extends(PostRemoteServersRequest, _super);
    function PostRemoteServersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostRemoteServersRequestBody)
    ], PostRemoteServersRequest.prototype, "request", void 0);
    return PostRemoteServersRequest;
}(utils_1.SpeakeasyBase));
exports.PostRemoteServersRequest = PostRemoteServersRequest;
var PostRemoteServersResponse = /** @class */ (function (_super) {
    __extends(PostRemoteServersResponse, _super);
    function PostRemoteServersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostRemoteServersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.RemoteServerEntity)
    ], PostRemoteServersResponse.prototype, "remoteServerEntity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostRemoteServersResponse.prototype, "statusCode", void 0);
    return PostRemoteServersResponse;
}(utils_1.SpeakeasyBase));
exports.PostRemoteServersResponse = PostRemoteServersResponse;
