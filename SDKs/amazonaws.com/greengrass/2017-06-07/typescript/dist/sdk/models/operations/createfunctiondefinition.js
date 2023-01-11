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
exports.CreateFunctionDefinitionResponse = exports.CreateFunctionDefinitionRequest = exports.CreateFunctionDefinitionRequestBody = exports.CreateFunctionDefinitionRequestBodyInitialVersion = exports.CreateFunctionDefinitionHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateFunctionDefinitionHeaders = /** @class */ (function (_super) {
    __extends(CreateFunctionDefinitionHeaders, _super);
    function CreateFunctionDefinitionHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionHeaders.prototype, "xAmznClientToken", void 0);
    return CreateFunctionDefinitionHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateFunctionDefinitionHeaders = CreateFunctionDefinitionHeaders;
// CreateFunctionDefinitionRequestBodyInitialVersion
/**
 * Information about a function definition version.
**/
var CreateFunctionDefinitionRequestBodyInitialVersion = /** @class */ (function (_super) {
    __extends(CreateFunctionDefinitionRequestBodyInitialVersion, _super);
    function CreateFunctionDefinitionRequestBodyInitialVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DefaultConfig" }),
        __metadata("design:type", shared.FunctionDefaultConfig)
    ], CreateFunctionDefinitionRequestBodyInitialVersion.prototype, "defaultConfig", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Functions", elemType: shared.Function }),
        __metadata("design:type", Array)
    ], CreateFunctionDefinitionRequestBodyInitialVersion.prototype, "functions", void 0);
    return CreateFunctionDefinitionRequestBodyInitialVersion;
}(utils_1.SpeakeasyBase));
exports.CreateFunctionDefinitionRequestBodyInitialVersion = CreateFunctionDefinitionRequestBodyInitialVersion;
var CreateFunctionDefinitionRequestBody = /** @class */ (function (_super) {
    __extends(CreateFunctionDefinitionRequestBody, _super);
    function CreateFunctionDefinitionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InitialVersion" }),
        __metadata("design:type", CreateFunctionDefinitionRequestBodyInitialVersion)
    ], CreateFunctionDefinitionRequestBody.prototype, "initialVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], CreateFunctionDefinitionRequestBody.prototype, "tags", void 0);
    return CreateFunctionDefinitionRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateFunctionDefinitionRequestBody = CreateFunctionDefinitionRequestBody;
var CreateFunctionDefinitionRequest = /** @class */ (function (_super) {
    __extends(CreateFunctionDefinitionRequest, _super);
    function CreateFunctionDefinitionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateFunctionDefinitionHeaders)
    ], CreateFunctionDefinitionRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateFunctionDefinitionRequestBody)
    ], CreateFunctionDefinitionRequest.prototype, "request", void 0);
    return CreateFunctionDefinitionRequest;
}(utils_1.SpeakeasyBase));
exports.CreateFunctionDefinitionRequest = CreateFunctionDefinitionRequest;
var CreateFunctionDefinitionResponse = /** @class */ (function (_super) {
    __extends(CreateFunctionDefinitionResponse, _super);
    function CreateFunctionDefinitionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateFunctionDefinitionResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateFunctionDefinitionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreateFunctionDefinitionResponse)
    ], CreateFunctionDefinitionResponse.prototype, "createFunctionDefinitionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateFunctionDefinitionResponse.prototype, "statusCode", void 0);
    return CreateFunctionDefinitionResponse;
}(utils_1.SpeakeasyBase));
exports.CreateFunctionDefinitionResponse = CreateFunctionDefinitionResponse;
