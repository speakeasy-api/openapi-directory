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
exports.GetNetworksResponse = exports.GetNetworksRequest = exports.GetNetworks400ApplicationVndApiPlusJson = exports.GetNetworks400ApplicationVndApiPlusJsonErrors = exports.GetNetworks400ApplicationVndApiPlusJsonErrorsSource = exports.GetNetworks200ApplicationVndApiPlusJson = exports.GetNetworksQueryParams = exports.GetNetworksSortEnum = exports.GetNetworksAdDealStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetNetworksAdDealStatusEnum;
(function (GetNetworksAdDealStatusEnum) {
    GetNetworksAdDealStatusEnum["Active"] = "active";
    GetNetworksAdDealStatusEnum["Inactive"] = "inactive";
    GetNetworksAdDealStatusEnum["PendingActive"] = "pending_active";
    GetNetworksAdDealStatusEnum["PendingInactive"] = "pending_inactive";
})(GetNetworksAdDealStatusEnum = exports.GetNetworksAdDealStatusEnum || (exports.GetNetworksAdDealStatusEnum = {}));
var GetNetworksSortEnum;
(function (GetNetworksSortEnum) {
    GetNetworksSortEnum["CreatedAt"] = "created_at";
    GetNetworksSortEnum["Name"] = "name";
    GetNetworksSortEnum["UpdatedAt"] = "updated_at";
})(GetNetworksSortEnum = exports.GetNetworksSortEnum || (exports.GetNetworksSortEnum = {}));
var GetNetworksQueryParams = /** @class */ (function (_super) {
    __extends(GetNetworksQueryParams, _super);
    function GetNetworksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=ad_deal_status" }),
        __metadata("design:type", Array)
    ], GetNetworksQueryParams.prototype, "adDealStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ad_rep_account_id" }),
        __metadata("design:type", String)
    ], GetNetworksQueryParams.prototype, "adRepAccountId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=ids[]" }),
        __metadata("design:type", Array)
    ], GetNetworksQueryParams.prototype, "ids", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page[number]" }),
        __metadata("design:type", Number)
    ], GetNetworksQueryParams.prototype, "pageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page[size]" }),
        __metadata("design:type", Number)
    ], GetNetworksQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetNetworksQueryParams.prototype, "q", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=false;name=sort" }),
        __metadata("design:type", Array)
    ], GetNetworksQueryParams.prototype, "sort", void 0);
    return GetNetworksQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetNetworksQueryParams = GetNetworksQueryParams;
var GetNetworks200ApplicationVndApiPlusJson = /** @class */ (function (_super) {
    __extends(GetNetworks200ApplicationVndApiPlusJson, _super);
    function GetNetworks200ApplicationVndApiPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.Network }),
        __metadata("design:type", Array)
    ], GetNetworks200ApplicationVndApiPlusJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", shared.Links)
    ], GetNetworks200ApplicationVndApiPlusJson.prototype, "links", void 0);
    return GetNetworks200ApplicationVndApiPlusJson;
}(utils_1.SpeakeasyBase));
exports.GetNetworks200ApplicationVndApiPlusJson = GetNetworks200ApplicationVndApiPlusJson;
// GetNetworks400ApplicationVndApiPlusJsonErrorsSource
/**
 * An object containing references to the source of the error, optionally including any of the following members.
 *
**/
var GetNetworks400ApplicationVndApiPlusJsonErrorsSource = /** @class */ (function (_super) {
    __extends(GetNetworks400ApplicationVndApiPlusJsonErrorsSource, _super);
    function GetNetworks400ApplicationVndApiPlusJsonErrorsSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parameter" }),
        __metadata("design:type", String)
    ], GetNetworks400ApplicationVndApiPlusJsonErrorsSource.prototype, "parameter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pointer" }),
        __metadata("design:type", String)
    ], GetNetworks400ApplicationVndApiPlusJsonErrorsSource.prototype, "pointer", void 0);
    return GetNetworks400ApplicationVndApiPlusJsonErrorsSource;
}(utils_1.SpeakeasyBase));
exports.GetNetworks400ApplicationVndApiPlusJsonErrorsSource = GetNetworks400ApplicationVndApiPlusJsonErrorsSource;
var GetNetworks400ApplicationVndApiPlusJsonErrors = /** @class */ (function (_super) {
    __extends(GetNetworks400ApplicationVndApiPlusJsonErrors, _super);
    function GetNetworks400ApplicationVndApiPlusJsonErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetNetworks400ApplicationVndApiPlusJsonErrors.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=detail" }),
        __metadata("design:type", String)
    ], GetNetworks400ApplicationVndApiPlusJsonErrors.prototype, "detail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", GetNetworks400ApplicationVndApiPlusJsonErrorsSource)
    ], GetNetworks400ApplicationVndApiPlusJsonErrors.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetNetworks400ApplicationVndApiPlusJsonErrors.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetNetworks400ApplicationVndApiPlusJsonErrors.prototype, "title", void 0);
    return GetNetworks400ApplicationVndApiPlusJsonErrors;
}(utils_1.SpeakeasyBase));
exports.GetNetworks400ApplicationVndApiPlusJsonErrors = GetNetworks400ApplicationVndApiPlusJsonErrors;
var GetNetworks400ApplicationVndApiPlusJson = /** @class */ (function (_super) {
    __extends(GetNetworks400ApplicationVndApiPlusJson, _super);
    function GetNetworks400ApplicationVndApiPlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errors", elemType: GetNetworks400ApplicationVndApiPlusJsonErrors }),
        __metadata("design:type", Array)
    ], GetNetworks400ApplicationVndApiPlusJson.prototype, "errors", void 0);
    return GetNetworks400ApplicationVndApiPlusJson;
}(utils_1.SpeakeasyBase));
exports.GetNetworks400ApplicationVndApiPlusJson = GetNetworks400ApplicationVndApiPlusJson;
var GetNetworksRequest = /** @class */ (function (_super) {
    __extends(GetNetworksRequest, _super);
    function GetNetworksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworksQueryParams)
    ], GetNetworksRequest.prototype, "queryParams", void 0);
    return GetNetworksRequest;
}(utils_1.SpeakeasyBase));
exports.GetNetworksRequest = GetNetworksRequest;
var GetNetworksResponse = /** @class */ (function (_super) {
    __extends(GetNetworksResponse, _super);
    function GetNetworksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetNetworksResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetNetworksResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetNetworksResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworks200ApplicationVndApiPlusJson)
    ], GetNetworksResponse.prototype, "getNetworks200ApplicationVndApiPlusJsonObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetNetworks400ApplicationVndApiPlusJson)
    ], GetNetworksResponse.prototype, "getNetworks400ApplicationVndApiPlusJsonObject", void 0);
    return GetNetworksResponse;
}(utils_1.SpeakeasyBase));
exports.GetNetworksResponse = GetNetworksResponse;
