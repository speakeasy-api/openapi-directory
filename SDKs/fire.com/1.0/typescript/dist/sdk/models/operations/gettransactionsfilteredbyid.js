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
exports.GetTransactionsFilteredByIdResponse = exports.GetTransactionsFilteredByIdRequest = exports.GetTransactionsFilteredByIdQueryParams = exports.GetTransactionsFilteredByIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetTransactionsFilteredByIdPathParams = /** @class */ (function (_super) {
    __extends(GetTransactionsFilteredByIdPathParams, _super);
    function GetTransactionsFilteredByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=ican" }),
        __metadata("design:type", Number)
    ], GetTransactionsFilteredByIdPathParams.prototype, "ican", void 0);
    return GetTransactionsFilteredByIdPathParams;
}(utils_1.SpeakeasyBase));
exports.GetTransactionsFilteredByIdPathParams = GetTransactionsFilteredByIdPathParams;
var GetTransactionsFilteredByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetTransactionsFilteredByIdQueryParams, _super);
    function GetTransactionsFilteredByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=dateRangeFrom" }),
        __metadata("design:type", Number)
    ], GetTransactionsFilteredByIdQueryParams.prototype, "dateRangeFrom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=dateRangeTo" }),
        __metadata("design:type", Number)
    ], GetTransactionsFilteredByIdQueryParams.prototype, "dateRangeTo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=searchKeyword" }),
        __metadata("design:type", String)
    ], GetTransactionsFilteredByIdQueryParams.prototype, "searchKeyword", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=transactionTypes" }),
        __metadata("design:type", Array)
    ], GetTransactionsFilteredByIdQueryParams.prototype, "transactionTypes", void 0);
    return GetTransactionsFilteredByIdQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetTransactionsFilteredByIdQueryParams = GetTransactionsFilteredByIdQueryParams;
var GetTransactionsFilteredByIdRequest = /** @class */ (function (_super) {
    __extends(GetTransactionsFilteredByIdRequest, _super);
    function GetTransactionsFilteredByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTransactionsFilteredByIdPathParams)
    ], GetTransactionsFilteredByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetTransactionsFilteredByIdQueryParams)
    ], GetTransactionsFilteredByIdRequest.prototype, "queryParams", void 0);
    return GetTransactionsFilteredByIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetTransactionsFilteredByIdRequest = GetTransactionsFilteredByIdRequest;
var GetTransactionsFilteredByIdResponse = /** @class */ (function (_super) {
    __extends(GetTransactionsFilteredByIdResponse, _super);
    function GetTransactionsFilteredByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetTransactionsFilteredByIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetTransactionsFilteredByIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema)
    ], GetTransactionsFilteredByIdResponse.prototype, "oneaccounts1Percent7BicanPercent7D1transactionsGetResponses200ContentApplication1jsonSchema", void 0);
    return GetTransactionsFilteredByIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetTransactionsFilteredByIdResponse = GetTransactionsFilteredByIdResponse;
