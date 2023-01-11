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
exports.ListSharesResponse = exports.ListSharesRequest = exports.ListSharesHeaders = exports.ListSharesQueryParams = exports.ListSharesTypeEnum = exports.ListSharesSortEnum = exports.ListSharesScopeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListSharesScopeEnum;
(function (ListSharesScopeEnum) {
    ListSharesScopeEnum["All"] = "all";
    ListSharesScopeEnum["Active"] = "active";
    ListSharesScopeEnum["CurrentUser"] = "currentUser";
})(ListSharesScopeEnum = exports.ListSharesScopeEnum || (exports.ListSharesScopeEnum = {}));
var ListSharesSortEnum;
(function (ListSharesSortEnum) {
    ListSharesSortEnum["Created"] = "created";
    ListSharesSortEnum["MinusCreated"] = "-created";
})(ListSharesSortEnum = exports.ListSharesSortEnum || (exports.ListSharesSortEnum = {}));
var ListSharesTypeEnum;
(function (ListSharesTypeEnum) {
    ListSharesTypeEnum["Receive"] = "receive";
    ListSharesTypeEnum["SharedFolder"] = "shared_folder";
    ListSharesTypeEnum["Send"] = "send";
})(ListSharesTypeEnum = exports.ListSharesTypeEnum || (exports.ListSharesTypeEnum = {}));
var ListSharesQueryParams = /** @class */ (function (_super) {
    __extends(ListSharesQueryParams, _super);
    function ListSharesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=include" }),
        __metadata("design:type", String)
    ], ListSharesQueryParams.prototype, "include", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ListSharesQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=message" }),
        __metadata("design:type", String)
    ], ListSharesQueryParams.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], ListSharesQueryParams.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ListSharesQueryParams.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=recipient" }),
        __metadata("design:type", String)
    ], ListSharesQueryParams.prototype, "recipient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=scope" }),
        __metadata("design:type", String)
    ], ListSharesQueryParams.prototype, "scope", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], ListSharesQueryParams.prototype, "search", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ListSharesQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], ListSharesQueryParams.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=username" }),
        __metadata("design:type", String)
    ], ListSharesQueryParams.prototype, "username", void 0);
    return ListSharesQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListSharesQueryParams = ListSharesQueryParams;
var ListSharesHeaders = /** @class */ (function (_super) {
    __extends(ListSharesHeaders, _super);
    function ListSharesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ev-access-token" }),
        __metadata("design:type", String)
    ], ListSharesHeaders.prototype, "evAccessToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=ev-api-key" }),
        __metadata("design:type", String)
    ], ListSharesHeaders.prototype, "evApiKey", void 0);
    return ListSharesHeaders;
}(utils_1.SpeakeasyBase));
exports.ListSharesHeaders = ListSharesHeaders;
var ListSharesRequest = /** @class */ (function (_super) {
    __extends(ListSharesRequest, _super);
    function ListSharesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSharesQueryParams)
    ], ListSharesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListSharesHeaders)
    ], ListSharesRequest.prototype, "headers", void 0);
    return ListSharesRequest;
}(utils_1.SpeakeasyBase));
exports.ListSharesRequest = ListSharesRequest;
var ListSharesResponse = /** @class */ (function (_super) {
    __extends(ListSharesResponse, _super);
    function ListSharesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListSharesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ShareCollectionResponse)
    ], ListSharesResponse.prototype, "shareCollectionResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListSharesResponse.prototype, "statusCode", void 0);
    return ListSharesResponse;
}(utils_1.SpeakeasyBase));
exports.ListSharesResponse = ListSharesResponse;
