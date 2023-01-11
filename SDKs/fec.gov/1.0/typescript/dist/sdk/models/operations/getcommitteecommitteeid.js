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
exports.GetCommitteeCommitteeIdResponse = exports.GetCommitteeCommitteeIdRequest = exports.GetCommitteeCommitteeIdQueryParams = exports.GetCommitteeCommitteeIdOrganizationTypeEnum = exports.GetCommitteeCommitteeIdFilingFrequencyEnum = exports.GetCommitteeCommitteeIdDesignationEnum = exports.GetCommitteeCommitteeIdCommitteeTypeEnum = exports.GetCommitteeCommitteeIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetCommitteeCommitteeIdPathParams = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdPathParams, _super);
    function GetCommitteeCommitteeIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=committee_id" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdPathParams.prototype, "committeeId", void 0);
    return GetCommitteeCommitteeIdPathParams;
}(utils_1.SpeakeasyBase));
exports.GetCommitteeCommitteeIdPathParams = GetCommitteeCommitteeIdPathParams;
var GetCommitteeCommitteeIdCommitteeTypeEnum;
(function (GetCommitteeCommitteeIdCommitteeTypeEnum) {
    GetCommitteeCommitteeIdCommitteeTypeEnum["Unknown"] = "";
    GetCommitteeCommitteeIdCommitteeTypeEnum["C"] = "C";
    GetCommitteeCommitteeIdCommitteeTypeEnum["D"] = "D";
    GetCommitteeCommitteeIdCommitteeTypeEnum["E"] = "E";
    GetCommitteeCommitteeIdCommitteeTypeEnum["H"] = "H";
    GetCommitteeCommitteeIdCommitteeTypeEnum["I"] = "I";
    GetCommitteeCommitteeIdCommitteeTypeEnum["N"] = "N";
    GetCommitteeCommitteeIdCommitteeTypeEnum["O"] = "O";
    GetCommitteeCommitteeIdCommitteeTypeEnum["P"] = "P";
    GetCommitteeCommitteeIdCommitteeTypeEnum["Q"] = "Q";
    GetCommitteeCommitteeIdCommitteeTypeEnum["S"] = "S";
    GetCommitteeCommitteeIdCommitteeTypeEnum["U"] = "U";
    GetCommitteeCommitteeIdCommitteeTypeEnum["V"] = "V";
    GetCommitteeCommitteeIdCommitteeTypeEnum["W"] = "W";
    GetCommitteeCommitteeIdCommitteeTypeEnum["X"] = "X";
    GetCommitteeCommitteeIdCommitteeTypeEnum["Y"] = "Y";
    GetCommitteeCommitteeIdCommitteeTypeEnum["Z"] = "Z";
})(GetCommitteeCommitteeIdCommitteeTypeEnum = exports.GetCommitteeCommitteeIdCommitteeTypeEnum || (exports.GetCommitteeCommitteeIdCommitteeTypeEnum = {}));
var GetCommitteeCommitteeIdDesignationEnum;
(function (GetCommitteeCommitteeIdDesignationEnum) {
    GetCommitteeCommitteeIdDesignationEnum["Unknown"] = "";
    GetCommitteeCommitteeIdDesignationEnum["A"] = "A";
    GetCommitteeCommitteeIdDesignationEnum["J"] = "J";
    GetCommitteeCommitteeIdDesignationEnum["P"] = "P";
    GetCommitteeCommitteeIdDesignationEnum["U"] = "U";
    GetCommitteeCommitteeIdDesignationEnum["B"] = "B";
    GetCommitteeCommitteeIdDesignationEnum["D"] = "D";
})(GetCommitteeCommitteeIdDesignationEnum = exports.GetCommitteeCommitteeIdDesignationEnum || (exports.GetCommitteeCommitteeIdDesignationEnum = {}));
var GetCommitteeCommitteeIdFilingFrequencyEnum;
(function (GetCommitteeCommitteeIdFilingFrequencyEnum) {
    GetCommitteeCommitteeIdFilingFrequencyEnum["Unknown"] = "";
    GetCommitteeCommitteeIdFilingFrequencyEnum["A"] = "A";
    GetCommitteeCommitteeIdFilingFrequencyEnum["M"] = "M";
    GetCommitteeCommitteeIdFilingFrequencyEnum["N"] = "N";
    GetCommitteeCommitteeIdFilingFrequencyEnum["Q"] = "Q";
    GetCommitteeCommitteeIdFilingFrequencyEnum["T"] = "T";
    GetCommitteeCommitteeIdFilingFrequencyEnum["W"] = "W";
    GetCommitteeCommitteeIdFilingFrequencyEnum["MinusA"] = "-A";
    GetCommitteeCommitteeIdFilingFrequencyEnum["MinusT"] = "-T";
})(GetCommitteeCommitteeIdFilingFrequencyEnum = exports.GetCommitteeCommitteeIdFilingFrequencyEnum || (exports.GetCommitteeCommitteeIdFilingFrequencyEnum = {}));
var GetCommitteeCommitteeIdOrganizationTypeEnum;
(function (GetCommitteeCommitteeIdOrganizationTypeEnum) {
    GetCommitteeCommitteeIdOrganizationTypeEnum["Unknown"] = "";
    GetCommitteeCommitteeIdOrganizationTypeEnum["C"] = "C";
    GetCommitteeCommitteeIdOrganizationTypeEnum["L"] = "L";
    GetCommitteeCommitteeIdOrganizationTypeEnum["M"] = "M";
    GetCommitteeCommitteeIdOrganizationTypeEnum["T"] = "T";
    GetCommitteeCommitteeIdOrganizationTypeEnum["V"] = "V";
    GetCommitteeCommitteeIdOrganizationTypeEnum["W"] = "W";
})(GetCommitteeCommitteeIdOrganizationTypeEnum = exports.GetCommitteeCommitteeIdOrganizationTypeEnum || (exports.GetCommitteeCommitteeIdOrganizationTypeEnum = {}));
var GetCommitteeCommitteeIdQueryParams = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdQueryParams, _super);
    function GetCommitteeCommitteeIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdQueryParams.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=committee_type" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdQueryParams.prototype, "committeeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cycle" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdQueryParams.prototype, "cycle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=designation" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdQueryParams.prototype, "designation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filing_frequency" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdQueryParams.prototype, "filingFrequency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=organization_type" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdQueryParams.prototype, "organizationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdQueryParams.prototype, "sortNullsLast", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdQueryParams.prototype, "year", void 0);
    return GetCommitteeCommitteeIdQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetCommitteeCommitteeIdQueryParams = GetCommitteeCommitteeIdQueryParams;
var GetCommitteeCommitteeIdRequest = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdRequest, _super);
    function GetCommitteeCommitteeIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCommitteeCommitteeIdPathParams)
    ], GetCommitteeCommitteeIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCommitteeCommitteeIdQueryParams)
    ], GetCommitteeCommitteeIdRequest.prototype, "queryParams", void 0);
    return GetCommitteeCommitteeIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetCommitteeCommitteeIdRequest = GetCommitteeCommitteeIdRequest;
var GetCommitteeCommitteeIdResponse = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdResponse, _super);
    function GetCommitteeCommitteeIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CommitteeDetailPage)
    ], GetCommitteeCommitteeIdResponse.prototype, "committeeDetailPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdResponse.prototype, "statusCode", void 0);
    return GetCommitteeCommitteeIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetCommitteeCommitteeIdResponse = GetCommitteeCommitteeIdResponse;
