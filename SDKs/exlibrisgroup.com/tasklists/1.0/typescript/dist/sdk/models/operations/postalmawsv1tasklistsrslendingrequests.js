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
exports.PostAlmawsV1TaskListsRsLendingRequestsResponse = exports.PostAlmawsV1TaskListsRsLendingRequestsRequest = exports.PostAlmawsV1TaskListsRsLendingRequestsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var PostAlmawsV1TaskListsRsLendingRequestsQueryParams = /** @class */ (function (_super) {
    __extends(PostAlmawsV1TaskListsRsLendingRequestsQueryParams, _super);
    function PostAlmawsV1TaskListsRsLendingRequestsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=library" }),
        __metadata("design:type", String)
    ], PostAlmawsV1TaskListsRsLendingRequestsQueryParams.prototype, "library", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=op" }),
        __metadata("design:type", String)
    ], PostAlmawsV1TaskListsRsLendingRequestsQueryParams.prototype, "op", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=partner" }),
        __metadata("design:type", String)
    ], PostAlmawsV1TaskListsRsLendingRequestsQueryParams.prototype, "partner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=printed" }),
        __metadata("design:type", String)
    ], PostAlmawsV1TaskListsRsLendingRequestsQueryParams.prototype, "printed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=reported" }),
        __metadata("design:type", String)
    ], PostAlmawsV1TaskListsRsLendingRequestsQueryParams.prototype, "reported", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=requested_format" }),
        __metadata("design:type", String)
    ], PostAlmawsV1TaskListsRsLendingRequestsQueryParams.prototype, "requestedFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], PostAlmawsV1TaskListsRsLendingRequestsQueryParams.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=supplied_format" }),
        __metadata("design:type", String)
    ], PostAlmawsV1TaskListsRsLendingRequestsQueryParams.prototype, "suppliedFormat", void 0);
    return PostAlmawsV1TaskListsRsLendingRequestsQueryParams;
}(utils_1.SpeakeasyBase));
exports.PostAlmawsV1TaskListsRsLendingRequestsQueryParams = PostAlmawsV1TaskListsRsLendingRequestsQueryParams;
var PostAlmawsV1TaskListsRsLendingRequestsRequest = /** @class */ (function (_super) {
    __extends(PostAlmawsV1TaskListsRsLendingRequestsRequest, _super);
    function PostAlmawsV1TaskListsRsLendingRequestsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostAlmawsV1TaskListsRsLendingRequestsQueryParams)
    ], PostAlmawsV1TaskListsRsLendingRequestsRequest.prototype, "queryParams", void 0);
    return PostAlmawsV1TaskListsRsLendingRequestsRequest;
}(utils_1.SpeakeasyBase));
exports.PostAlmawsV1TaskListsRsLendingRequestsRequest = PostAlmawsV1TaskListsRsLendingRequestsRequest;
var PostAlmawsV1TaskListsRsLendingRequestsResponse = /** @class */ (function (_super) {
    __extends(PostAlmawsV1TaskListsRsLendingRequestsResponse, _super);
    function PostAlmawsV1TaskListsRsLendingRequestsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], PostAlmawsV1TaskListsRsLendingRequestsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostAlmawsV1TaskListsRsLendingRequestsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostAlmawsV1TaskListsRsLendingRequestsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostAlmawsV1TaskListsRsLendingRequestsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems)
    ], PostAlmawsV1TaskListsRsLendingRequestsResponse.prototype, "onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems", void 0);
    return PostAlmawsV1TaskListsRsLendingRequestsResponse;
}(utils_1.SpeakeasyBase));
exports.PostAlmawsV1TaskListsRsLendingRequestsResponse = PostAlmawsV1TaskListsRsLendingRequestsResponse;
