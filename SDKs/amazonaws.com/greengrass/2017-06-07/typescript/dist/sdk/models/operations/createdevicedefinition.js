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
exports.CreateDeviceDefinitionResponse = exports.CreateDeviceDefinitionRequest = exports.CreateDeviceDefinitionRequestBody = exports.CreateDeviceDefinitionRequestBodyInitialVersion = exports.CreateDeviceDefinitionHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateDeviceDefinitionHeaders = /** @class */ (function (_super) {
    __extends(CreateDeviceDefinitionHeaders, _super);
    function CreateDeviceDefinitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateDeviceDefinitionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateDeviceDefinitionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateDeviceDefinitionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateDeviceDefinitionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateDeviceDefinitionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateDeviceDefinitionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateDeviceDefinitionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" }),
        __metadata("design:type", String)
    ], CreateDeviceDefinitionHeaders.prototype, "xAmznClientToken", void 0);
    return CreateDeviceDefinitionHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateDeviceDefinitionHeaders = CreateDeviceDefinitionHeaders;
// CreateDeviceDefinitionRequestBodyInitialVersion
/**
 * Information about a device definition version.
**/
var CreateDeviceDefinitionRequestBodyInitialVersion = /** @class */ (function (_super) {
    __extends(CreateDeviceDefinitionRequestBodyInitialVersion, _super);
    function CreateDeviceDefinitionRequestBodyInitialVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Devices", elemType: shared.Device }),
        __metadata("design:type", Array)
    ], CreateDeviceDefinitionRequestBodyInitialVersion.prototype, "devices", void 0);
    return CreateDeviceDefinitionRequestBodyInitialVersion;
}(utils_1.SpeakeasyBase));
exports.CreateDeviceDefinitionRequestBodyInitialVersion = CreateDeviceDefinitionRequestBodyInitialVersion;
var CreateDeviceDefinitionRequestBody = /** @class */ (function (_super) {
    __extends(CreateDeviceDefinitionRequestBody, _super);
    function CreateDeviceDefinitionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InitialVersion" }),
        __metadata("design:type", CreateDeviceDefinitionRequestBodyInitialVersion)
    ], CreateDeviceDefinitionRequestBody.prototype, "initialVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateDeviceDefinitionRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], CreateDeviceDefinitionRequestBody.prototype, "tags", void 0);
    return CreateDeviceDefinitionRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateDeviceDefinitionRequestBody = CreateDeviceDefinitionRequestBody;
var CreateDeviceDefinitionRequest = /** @class */ (function (_super) {
    __extends(CreateDeviceDefinitionRequest, _super);
    function CreateDeviceDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateDeviceDefinitionHeaders)
    ], CreateDeviceDefinitionRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateDeviceDefinitionRequestBody)
    ], CreateDeviceDefinitionRequest.prototype, "request", void 0);
    return CreateDeviceDefinitionRequest;
}(utils_1.SpeakeasyBase));
exports.CreateDeviceDefinitionRequest = CreateDeviceDefinitionRequest;
var CreateDeviceDefinitionResponse = /** @class */ (function (_super) {
    __extends(CreateDeviceDefinitionResponse, _super);
    function CreateDeviceDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateDeviceDefinitionResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateDeviceDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreateDeviceDefinitionResponse)
    ], CreateDeviceDefinitionResponse.prototype, "createDeviceDefinitionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateDeviceDefinitionResponse.prototype, "statusCode", void 0);
    return CreateDeviceDefinitionResponse;
}(utils_1.SpeakeasyBase));
exports.CreateDeviceDefinitionResponse = CreateDeviceDefinitionResponse;
