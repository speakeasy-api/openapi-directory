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
exports.ListTaskDefinitionFamiliesResponse = exports.ListTaskDefinitionFamiliesRequest = exports.ListTaskDefinitionFamiliesHeaders = exports.ListTaskDefinitionFamiliesXAmzTargetEnum = exports.ListTaskDefinitionFamiliesQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListTaskDefinitionFamiliesQueryParams = /** @class */ (function (_super) {
    __extends(ListTaskDefinitionFamiliesQueryParams, _super);
    function ListTaskDefinitionFamiliesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", String)
    ], ListTaskDefinitionFamiliesQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListTaskDefinitionFamiliesQueryParams.prototype, "nextToken", void 0);
    return ListTaskDefinitionFamiliesQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListTaskDefinitionFamiliesQueryParams = ListTaskDefinitionFamiliesQueryParams;
var ListTaskDefinitionFamiliesXAmzTargetEnum;
(function (ListTaskDefinitionFamiliesXAmzTargetEnum) {
    ListTaskDefinitionFamiliesXAmzTargetEnum["AmazonEc2ContainerServiceV20141113ListTaskDefinitionFamilies"] = "AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies";
})(ListTaskDefinitionFamiliesXAmzTargetEnum = exports.ListTaskDefinitionFamiliesXAmzTargetEnum || (exports.ListTaskDefinitionFamiliesXAmzTargetEnum = {}));
var ListTaskDefinitionFamiliesHeaders = /** @class */ (function (_super) {
    __extends(ListTaskDefinitionFamiliesHeaders, _super);
    function ListTaskDefinitionFamiliesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListTaskDefinitionFamiliesHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListTaskDefinitionFamiliesHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListTaskDefinitionFamiliesHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListTaskDefinitionFamiliesHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListTaskDefinitionFamiliesHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListTaskDefinitionFamiliesHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListTaskDefinitionFamiliesHeaders.prototype, "xAmzSignedHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Target" }),
        __metadata("design:type", String)
    ], ListTaskDefinitionFamiliesHeaders.prototype, "xAmzTarget", void 0);
    return ListTaskDefinitionFamiliesHeaders;
}(utils_1.SpeakeasyBase));
exports.ListTaskDefinitionFamiliesHeaders = ListTaskDefinitionFamiliesHeaders;
var ListTaskDefinitionFamiliesRequest = /** @class */ (function (_super) {
    __extends(ListTaskDefinitionFamiliesRequest, _super);
    function ListTaskDefinitionFamiliesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListTaskDefinitionFamiliesQueryParams)
    ], ListTaskDefinitionFamiliesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListTaskDefinitionFamiliesHeaders)
    ], ListTaskDefinitionFamiliesRequest.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListTaskDefinitionFamiliesRequest)
    ], ListTaskDefinitionFamiliesRequest.prototype, "request", void 0);
    return ListTaskDefinitionFamiliesRequest;
}(utils_1.SpeakeasyBase));
exports.ListTaskDefinitionFamiliesRequest = ListTaskDefinitionFamiliesRequest;
var ListTaskDefinitionFamiliesResponse = /** @class */ (function (_super) {
    __extends(ListTaskDefinitionFamiliesResponse, _super);
    function ListTaskDefinitionFamiliesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListTaskDefinitionFamiliesResponse.prototype, "clientException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListTaskDefinitionFamiliesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListTaskDefinitionFamiliesResponse.prototype, "invalidParameterException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListTaskDefinitionFamiliesResponse)
    ], ListTaskDefinitionFamiliesResponse.prototype, "listTaskDefinitionFamiliesResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListTaskDefinitionFamiliesResponse.prototype, "serverException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListTaskDefinitionFamiliesResponse.prototype, "statusCode", void 0);
    return ListTaskDefinitionFamiliesResponse;
}(utils_1.SpeakeasyBase));
exports.ListTaskDefinitionFamiliesResponse = ListTaskDefinitionFamiliesResponse;
