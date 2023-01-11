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
exports.GetListingCarAuctionIdMediaResponse = exports.GetListingCarAuctionIdMediaRequest = exports.GetListingCarAuctionIdMediaQueryParams = exports.GetListingCarAuctionIdMediaPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetListingCarAuctionIdMediaPathParams = /** @class */ (function (_super) {
    __extends(GetListingCarAuctionIdMediaPathParams, _super);
    function GetListingCarAuctionIdMediaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetListingCarAuctionIdMediaPathParams.prototype, "id", void 0);
    return GetListingCarAuctionIdMediaPathParams;
}(utils_1.SpeakeasyBase));
exports.GetListingCarAuctionIdMediaPathParams = GetListingCarAuctionIdMediaPathParams;
var GetListingCarAuctionIdMediaQueryParams = /** @class */ (function (_super) {
    __extends(GetListingCarAuctionIdMediaQueryParams, _super);
    function GetListingCarAuctionIdMediaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetListingCarAuctionIdMediaQueryParams.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=append_api_key" }),
        __metadata("design:type", Boolean)
    ], GetListingCarAuctionIdMediaQueryParams.prototype, "appendApiKey", void 0);
    return GetListingCarAuctionIdMediaQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetListingCarAuctionIdMediaQueryParams = GetListingCarAuctionIdMediaQueryParams;
var GetListingCarAuctionIdMediaRequest = /** @class */ (function (_super) {
    __extends(GetListingCarAuctionIdMediaRequest, _super);
    function GetListingCarAuctionIdMediaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListingCarAuctionIdMediaPathParams)
    ], GetListingCarAuctionIdMediaRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetListingCarAuctionIdMediaQueryParams)
    ], GetListingCarAuctionIdMediaRequest.prototype, "queryParams", void 0);
    return GetListingCarAuctionIdMediaRequest;
}(utils_1.SpeakeasyBase));
exports.GetListingCarAuctionIdMediaRequest = GetListingCarAuctionIdMediaRequest;
var GetListingCarAuctionIdMediaResponse = /** @class */ (function (_super) {
    __extends(GetListingCarAuctionIdMediaResponse, _super);
    function GetListingCarAuctionIdMediaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetListingCarAuctionIdMediaResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorT)
    ], GetListingCarAuctionIdMediaResponse.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ListingMedia)
    ], GetListingCarAuctionIdMediaResponse.prototype, "listingMedia", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetListingCarAuctionIdMediaResponse.prototype, "statusCode", void 0);
    return GetListingCarAuctionIdMediaResponse;
}(utils_1.SpeakeasyBase));
exports.GetListingCarAuctionIdMediaResponse = GetListingCarAuctionIdMediaResponse;
