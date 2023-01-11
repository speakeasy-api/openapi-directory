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
exports.ListAssociatedAssetsResponse = exports.ListAssociatedAssetsRequest = exports.ListAssociatedAssetsHeaders = exports.ListAssociatedAssetsQueryParams = exports.ListAssociatedAssetsTraversalDirectionEnum = exports.ListAssociatedAssetsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListAssociatedAssetsPathParams = /** @class */ (function (_super) {
    __extends(ListAssociatedAssetsPathParams, _super);
    function ListAssociatedAssetsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=assetId" }),
        __metadata("design:type", String)
    ], ListAssociatedAssetsPathParams.prototype, "assetId", void 0);
    return ListAssociatedAssetsPathParams;
}(utils_1.SpeakeasyBase));
exports.ListAssociatedAssetsPathParams = ListAssociatedAssetsPathParams;
var ListAssociatedAssetsTraversalDirectionEnum;
(function (ListAssociatedAssetsTraversalDirectionEnum) {
    ListAssociatedAssetsTraversalDirectionEnum["Parent"] = "PARENT";
    ListAssociatedAssetsTraversalDirectionEnum["Child"] = "CHILD";
})(ListAssociatedAssetsTraversalDirectionEnum = exports.ListAssociatedAssetsTraversalDirectionEnum || (exports.ListAssociatedAssetsTraversalDirectionEnum = {}));
var ListAssociatedAssetsQueryParams = /** @class */ (function (_super) {
    __extends(ListAssociatedAssetsQueryParams, _super);
    function ListAssociatedAssetsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=hierarchyId" }),
        __metadata("design:type", String)
    ], ListAssociatedAssetsQueryParams.prototype, "hierarchyId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ListAssociatedAssetsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=nextToken" }),
        __metadata("design:type", String)
    ], ListAssociatedAssetsQueryParams.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=traversalDirection" }),
        __metadata("design:type", String)
    ], ListAssociatedAssetsQueryParams.prototype, "traversalDirection", void 0);
    return ListAssociatedAssetsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListAssociatedAssetsQueryParams = ListAssociatedAssetsQueryParams;
var ListAssociatedAssetsHeaders = /** @class */ (function (_super) {
    __extends(ListAssociatedAssetsHeaders, _super);
    function ListAssociatedAssetsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], ListAssociatedAssetsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], ListAssociatedAssetsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], ListAssociatedAssetsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], ListAssociatedAssetsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], ListAssociatedAssetsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], ListAssociatedAssetsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], ListAssociatedAssetsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return ListAssociatedAssetsHeaders;
}(utils_1.SpeakeasyBase));
exports.ListAssociatedAssetsHeaders = ListAssociatedAssetsHeaders;
var ListAssociatedAssetsRequest = /** @class */ (function (_super) {
    __extends(ListAssociatedAssetsRequest, _super);
    function ListAssociatedAssetsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAssociatedAssetsPathParams)
    ], ListAssociatedAssetsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAssociatedAssetsQueryParams)
    ], ListAssociatedAssetsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAssociatedAssetsHeaders)
    ], ListAssociatedAssetsRequest.prototype, "headers", void 0);
    return ListAssociatedAssetsRequest;
}(utils_1.SpeakeasyBase));
exports.ListAssociatedAssetsRequest = ListAssociatedAssetsRequest;
var ListAssociatedAssetsResponse = /** @class */ (function (_super) {
    __extends(ListAssociatedAssetsResponse, _super);
    function ListAssociatedAssetsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAssociatedAssetsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAssociatedAssetsResponse.prototype, "internalFailureException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAssociatedAssetsResponse.prototype, "invalidRequestException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListAssociatedAssetsResponse)
    ], ListAssociatedAssetsResponse.prototype, "listAssociatedAssetsResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAssociatedAssetsResponse.prototype, "resourceNotFoundException", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAssociatedAssetsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAssociatedAssetsResponse.prototype, "throttlingException", void 0);
    return ListAssociatedAssetsResponse;
}(utils_1.SpeakeasyBase));
exports.ListAssociatedAssetsResponse = ListAssociatedAssetsResponse;
