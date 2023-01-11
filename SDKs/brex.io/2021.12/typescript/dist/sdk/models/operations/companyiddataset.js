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
exports.CompanyIdDatasetResponse = exports.CompanyIdDatasetRequest = exports.CompanyIdDatasetSecurity = exports.CompanyIdDatasetQueryParams = exports.CompanyIdDatasetLangEnum = exports.CompanyIdDatasetPathParams = exports.CompanyIdDatasetDatasetEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CompanyIdDatasetDatasetEnum;
(function (CompanyIdDatasetDatasetEnum) {
    CompanyIdDatasetDatasetEnum["Unknown"] = "";
    CompanyIdDatasetDatasetEnum["Mini"] = "mini";
    CompanyIdDatasetDatasetEnum["Master"] = "master";
    CompanyIdDatasetDatasetEnum["Full"] = "full";
    CompanyIdDatasetDatasetEnum["Refresh"] = "refresh";
})(CompanyIdDatasetDatasetEnum = exports.CompanyIdDatasetDatasetEnum || (exports.CompanyIdDatasetDatasetEnum = {}));
var CompanyIdDatasetPathParams = /** @class */ (function (_super) {
    __extends(CompanyIdDatasetPathParams, _super);
    function CompanyIdDatasetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=dataset" }),
        __metadata("design:type", String)
    ], CompanyIdDatasetPathParams.prototype, "dataset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], CompanyIdDatasetPathParams.prototype, "id", void 0);
    return CompanyIdDatasetPathParams;
}(utils_1.SpeakeasyBase));
exports.CompanyIdDatasetPathParams = CompanyIdDatasetPathParams;
var CompanyIdDatasetLangEnum;
(function (CompanyIdDatasetLangEnum) {
    CompanyIdDatasetLangEnum["Unknown"] = "";
    CompanyIdDatasetLangEnum["En"] = "EN";
    CompanyIdDatasetLangEnum["Es"] = "ES";
    CompanyIdDatasetLangEnum["Fr"] = "FR";
})(CompanyIdDatasetLangEnum = exports.CompanyIdDatasetLangEnum || (exports.CompanyIdDatasetLangEnum = {}));
var CompanyIdDatasetQueryParams = /** @class */ (function (_super) {
    __extends(CompanyIdDatasetQueryParams, _super);
    function CompanyIdDatasetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=check_stock_listing" }),
        __metadata("design:type", Boolean)
    ], CompanyIdDatasetQueryParams.prototype, "checkStockListing", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], CompanyIdDatasetQueryParams.prototype, "lang", void 0);
    return CompanyIdDatasetQueryParams;
}(utils_1.SpeakeasyBase));
exports.CompanyIdDatasetQueryParams = CompanyIdDatasetQueryParams;
var CompanyIdDatasetSecurity = /** @class */ (function (_super) {
    __extends(CompanyIdDatasetSecurity, _super);
    function CompanyIdDatasetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeUserKey)
    ], CompanyIdDatasetSecurity.prototype, "userKey", void 0);
    return CompanyIdDatasetSecurity;
}(utils_1.SpeakeasyBase));
exports.CompanyIdDatasetSecurity = CompanyIdDatasetSecurity;
var CompanyIdDatasetRequest = /** @class */ (function (_super) {
    __extends(CompanyIdDatasetRequest, _super);
    function CompanyIdDatasetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CompanyIdDatasetPathParams)
    ], CompanyIdDatasetRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CompanyIdDatasetQueryParams)
    ], CompanyIdDatasetRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CompanyIdDatasetSecurity)
    ], CompanyIdDatasetRequest.prototype, "security", void 0);
    return CompanyIdDatasetRequest;
}(utils_1.SpeakeasyBase));
exports.CompanyIdDatasetRequest = CompanyIdDatasetRequest;
var CompanyIdDatasetResponse = /** @class */ (function (_super) {
    __extends(CompanyIdDatasetResponse, _super);
    function CompanyIdDatasetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CompanyIdDatasetResponse.prototype, "companyIdDatasetDefaultApplicationJSONAny", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CompanyIdDatasetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CompanyIdDatasetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CompanyIdDatasetResponse.prototype, "oneapi1v11company1deepsearch1lei1Percent7BnumberPercent7DGetResponses200ContentApplication1jsonSchemaPropertiesCompany", void 0);
    return CompanyIdDatasetResponse;
}(utils_1.SpeakeasyBase));
exports.CompanyIdDatasetResponse = CompanyIdDatasetResponse;
