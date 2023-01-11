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
exports.CreateSignalingChannelResponse = exports.CreateSignalingChannelRequest = exports.CreateSignalingChannelRequestBody = exports.CreateSignalingChannelRequestBodySingleMasterConfiguration = exports.CreateSignalingChannelRequestBodyChannelTypeEnum = exports.CreateSignalingChannelHeaders = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CreateSignalingChannelHeaders = /** @class */ (function (_super) {
    __extends(CreateSignalingChannelHeaders, _super);
    function CreateSignalingChannelHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateSignalingChannelHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateSignalingChannelHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateSignalingChannelHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateSignalingChannelHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateSignalingChannelHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateSignalingChannelHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateSignalingChannelHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateSignalingChannelHeaders;
}(utils_1.SpeakeasyBase));
exports.CreateSignalingChannelHeaders = CreateSignalingChannelHeaders;
var CreateSignalingChannelRequestBodyChannelTypeEnum;
(function (CreateSignalingChannelRequestBodyChannelTypeEnum) {
    CreateSignalingChannelRequestBodyChannelTypeEnum["SingleMaster"] = "SINGLE_MASTER";
})(CreateSignalingChannelRequestBodyChannelTypeEnum = exports.CreateSignalingChannelRequestBodyChannelTypeEnum || (exports.CreateSignalingChannelRequestBodyChannelTypeEnum = {}));
// CreateSignalingChannelRequestBodySingleMasterConfiguration
/**
 * A structure that contains the configuration for the <code>SINGLE_MASTER</code> channel type.
**/
var CreateSignalingChannelRequestBodySingleMasterConfiguration = /** @class */ (function (_super) {
    __extends(CreateSignalingChannelRequestBodySingleMasterConfiguration, _super);
    function CreateSignalingChannelRequestBodySingleMasterConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MessageTtlSeconds" }),
        __metadata("design:type", Number)
    ], CreateSignalingChannelRequestBodySingleMasterConfiguration.prototype, "messageTtlSeconds", void 0);
    return CreateSignalingChannelRequestBodySingleMasterConfiguration;
}(utils_1.SpeakeasyBase));
exports.CreateSignalingChannelRequestBodySingleMasterConfiguration = CreateSignalingChannelRequestBodySingleMasterConfiguration;
var CreateSignalingChannelRequestBody = /** @class */ (function (_super) {
    __extends(CreateSignalingChannelRequestBody, _super);
    function CreateSignalingChannelRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ChannelName" }),
        __metadata("design:type", String)
    ], CreateSignalingChannelRequestBody.prototype, "channelName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ChannelType" }),
        __metadata("design:type", String)
    ], CreateSignalingChannelRequestBody.prototype, "channelType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SingleMasterConfiguration" }),
        __metadata("design:type", CreateSignalingChannelRequestBodySingleMasterConfiguration)
    ], CreateSignalingChannelRequestBody.prototype, "singleMasterConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Tags", elemType: shared.Tag }),
        __metadata("design:type", Array)
    ], CreateSignalingChannelRequestBody.prototype, "tags", void 0);
    return CreateSignalingChannelRequestBody;
}(utils_1.SpeakeasyBase));
exports.CreateSignalingChannelRequestBody = CreateSignalingChannelRequestBody;
var CreateSignalingChannelRequest = /** @class */ (function (_super) {
    __extends(CreateSignalingChannelRequest, _super);
    function CreateSignalingChannelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreateSignalingChannelHeaders)
    ], CreateSignalingChannelRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateSignalingChannelRequestBody)
    ], CreateSignalingChannelRequest.prototype, "request", void 0);
    return CreateSignalingChannelRequest;
}(utils_1.SpeakeasyBase));
exports.CreateSignalingChannelRequest = CreateSignalingChannelRequest;
var CreateSignalingChannelResponse = /** @class */ (function (_super) {
    __extends(CreateSignalingChannelResponse, _super);
    function CreateSignalingChannelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateSignalingChannelResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateSignalingChannelResponse.prototype, "accountChannelLimitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateSignalingChannelResponse.prototype, "clientLimitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CreateSignalingChannelResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CreateSignalingChannelOutput)
    ], CreateSignalingChannelResponse.prototype, "createSignalingChannelOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateSignalingChannelResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateSignalingChannelResponse.prototype, "resourceInUseException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CreateSignalingChannelResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreateSignalingChannelResponse.prototype, "tagsPerResourceExceededLimitException", void 0);
    return CreateSignalingChannelResponse;
}(utils_1.SpeakeasyBase));
exports.CreateSignalingChannelResponse = CreateSignalingChannelResponse;
