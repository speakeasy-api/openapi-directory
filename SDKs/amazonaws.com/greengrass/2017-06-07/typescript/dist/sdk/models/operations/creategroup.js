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
exports.CreateGroupResponse = exports.CreateGroupRequest = exports.CreateGroupRequestBody = exports.CreateGroupRequestBodyInitialVersion = exports.CreateGroupHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateGroupHeaders = /** @class */ (function (_super) {
    __extends(CreateGroupHeaders, _super);
    function CreateGroupHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateGroupHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateGroupHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateGroupHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateGroupHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateGroupHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateGroupHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateGroupHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amzn-Client-Token" }),
        __metadata("design:type", String)
    ], CreateGroupHeaders.prototype, "xAmznClientToken", void 0);
    return CreateGroupHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateGroupHeaders = CreateGroupHeaders;
// CreateGroupRequestBodyInitialVersion
/**
 * Information about a group version.
**/
var CreateGroupRequestBodyInitialVersion = /** @class */ (function (_super) {
    __extends(CreateGroupRequestBodyInitialVersion, _super);
    function CreateGroupRequestBodyInitialVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ConnectorDefinitionVersionArn" }),
        __metadata("design:type", String)
    ], CreateGroupRequestBodyInitialVersion.prototype, "connectorDefinitionVersionArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CoreDefinitionVersionArn" }),
        __metadata("design:type", String)
    ], CreateGroupRequestBodyInitialVersion.prototype, "coreDefinitionVersionArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DeviceDefinitionVersionArn" }),
        __metadata("design:type", String)
    ], CreateGroupRequestBodyInitialVersion.prototype, "deviceDefinitionVersionArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FunctionDefinitionVersionArn" }),
        __metadata("design:type", String)
    ], CreateGroupRequestBodyInitialVersion.prototype, "functionDefinitionVersionArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LoggerDefinitionVersionArn" }),
        __metadata("design:type", String)
    ], CreateGroupRequestBodyInitialVersion.prototype, "loggerDefinitionVersionArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ResourceDefinitionVersionArn" }),
        __metadata("design:type", String)
    ], CreateGroupRequestBodyInitialVersion.prototype, "resourceDefinitionVersionArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SubscriptionDefinitionVersionArn" }),
        __metadata("design:type", String)
    ], CreateGroupRequestBodyInitialVersion.prototype, "subscriptionDefinitionVersionArn", void 0);
    return CreateGroupRequestBodyInitialVersion;
}(utils_1.SpeakeasyBase));
exports.CreateGroupRequestBodyInitialVersion = CreateGroupRequestBodyInitialVersion;
var CreateGroupRequestBody = /** @class */ (function (_super) {
    __extends(CreateGroupRequestBody, _super);
    function CreateGroupRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InitialVersion" }),
        __metadata("design:type", CreateGroupRequestBodyInitialVersion)
    ], CreateGroupRequestBody.prototype, "initialVersion", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateGroupRequestBody.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Object)
    ], CreateGroupRequestBody.prototype, "tags", void 0);
    return CreateGroupRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateGroupRequestBody = CreateGroupRequestBody;
var CreateGroupRequest = /** @class */ (function (_super) {
    __extends(CreateGroupRequest, _super);
    function CreateGroupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateGroupHeaders)
    ], CreateGroupRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateGroupRequestBody)
    ], CreateGroupRequest.prototype, "request", void 0);
    return CreateGroupRequest;
}(utils_1.SpeakeasyBase));
exports.CreateGroupRequest = CreateGroupRequest;
var CreateGroupResponse = /** @class */ (function (_super) {
    __extends(CreateGroupResponse, _super);
    function CreateGroupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateGroupResponse.prototype, "badRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateGroupResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreateGroupResponse)
    ], CreateGroupResponse.prototype, "createGroupResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateGroupResponse.prototype, "statusCode", void 0);
    return CreateGroupResponse;
}(utils_1.SpeakeasyBase));
exports.CreateGroupResponse = CreateGroupResponse;
