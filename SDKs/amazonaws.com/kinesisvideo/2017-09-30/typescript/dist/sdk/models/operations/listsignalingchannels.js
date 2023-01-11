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
exports.ListSignalingChannelsResponse = exports.ListSignalingChannelsRequest = exports.ListSignalingChannelsRequestBody = exports.ListSignalingChannelsRequestBodyChannelNameCondition = exports.ListSignalingChannelsHeaders = exports.ListSignalingChannelsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListSignalingChannelsQueryParams = /** @class */ (function (_super) {
    __extends(ListSignalingChannelsQueryParams, _super);
    function ListSignalingChannelsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], ListSignalingChannelsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], ListSignalingChannelsQueryParams.prototype, "nextToken", void 0);
    return ListSignalingChannelsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListSignalingChannelsQueryParams = ListSignalingChannelsQueryParams;
var ListSignalingChannelsHeaders = /** @class */ (function (_super) {
    __extends(ListSignalingChannelsHeaders, _super);
    function ListSignalingChannelsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListSignalingChannelsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListSignalingChannelsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListSignalingChannelsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListSignalingChannelsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListSignalingChannelsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListSignalingChannelsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListSignalingChannelsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListSignalingChannelsHeaders;
}(utils_1.SpeakeasyBase));
exports.ListSignalingChannelsHeaders = ListSignalingChannelsHeaders;
// ListSignalingChannelsRequestBodyChannelNameCondition
/**
 * An optional input parameter for the <code>ListSignalingChannels</code> API. When this parameter is specified while invoking <code>ListSignalingChannels</code>, the API returns only the channels that satisfy a condition specified in <code>ChannelNameCondition</code>.
**/
var ListSignalingChannelsRequestBodyChannelNameCondition = /** @class */ (function (_super) {
    __extends(ListSignalingChannelsRequestBodyChannelNameCondition, _super);
    function ListSignalingChannelsRequestBodyChannelNameCondition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ComparisonOperator" }),
        __metadata("design:type", String)
    ], ListSignalingChannelsRequestBodyChannelNameCondition.prototype, "comparisonOperator", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ComparisonValue" }),
        __metadata("design:type", String)
    ], ListSignalingChannelsRequestBodyChannelNameCondition.prototype, "comparisonValue", void 0);
    return ListSignalingChannelsRequestBodyChannelNameCondition;
}(utils_1.SpeakeasyBase));
exports.ListSignalingChannelsRequestBodyChannelNameCondition = ListSignalingChannelsRequestBodyChannelNameCondition;
var ListSignalingChannelsRequestBody = /** @class */ (function (_super) {
    __extends(ListSignalingChannelsRequestBody, _super);
    function ListSignalingChannelsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ChannelNameCondition" }),
        __metadata("design:type", ListSignalingChannelsRequestBodyChannelNameCondition)
    ], ListSignalingChannelsRequestBody.prototype, "channelNameCondition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], ListSignalingChannelsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], ListSignalingChannelsRequestBody.prototype, "nextToken", void 0);
    return ListSignalingChannelsRequestBody;
}(utils_1.SpeakeasyBase));
exports.ListSignalingChannelsRequestBody = ListSignalingChannelsRequestBody;
var ListSignalingChannelsRequest = /** @class */ (function (_super) {
    __extends(ListSignalingChannelsRequest, _super);
    function ListSignalingChannelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSignalingChannelsQueryParams)
    ], ListSignalingChannelsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSignalingChannelsHeaders)
    ], ListSignalingChannelsRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", ListSignalingChannelsRequestBody)
    ], ListSignalingChannelsRequest.prototype, "request", void 0);
    return ListSignalingChannelsRequest;
}(utils_1.SpeakeasyBase));
exports.ListSignalingChannelsRequest = ListSignalingChannelsRequest;
var ListSignalingChannelsResponse = /** @class */ (function (_super) {
    __extends(ListSignalingChannelsResponse, _super);
    function ListSignalingChannelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListSignalingChannelsResponse.prototype, "accessDeniedException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListSignalingChannelsResponse.prototype, "clientLimitExceededException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSignalingChannelsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListSignalingChannelsResponse.prototype, "invalidArgumentException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListSignalingChannelsOutput)
    ], ListSignalingChannelsResponse.prototype, "listSignalingChannelsOutput", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSignalingChannelsResponse.prototype, "statusCode", void 0);
    return ListSignalingChannelsResponse;
}(utils_1.SpeakeasyBase));
exports.ListSignalingChannelsResponse = ListSignalingChannelsResponse;
