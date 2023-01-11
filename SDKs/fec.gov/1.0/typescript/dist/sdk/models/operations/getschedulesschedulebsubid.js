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
exports.GetSchedulesScheduleBSubIdResponse = exports.GetSchedulesScheduleBSubIdRequest = exports.GetSchedulesScheduleBSubIdQueryParams = exports.GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum = exports.GetSchedulesScheduleBSubIdSpenderCommitteeOrgTypeEnum = exports.GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum = exports.GetSchedulesScheduleBSubIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetSchedulesScheduleBSubIdPathParams = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleBSubIdPathParams, _super);
    function GetSchedulesScheduleBSubIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=sub_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleBSubIdPathParams.prototype, "subId", void 0);
    return GetSchedulesScheduleBSubIdPathParams;
}(utils_1.SpeakeasyBase));
exports.GetSchedulesScheduleBSubIdPathParams = GetSchedulesScheduleBSubIdPathParams;
var GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum;
(function (GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum) {
    GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum["Unknown"] = "";
    GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum["A"] = "A";
    GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum["J"] = "J";
    GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum["P"] = "P";
    GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum["U"] = "U";
    GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum["B"] = "B";
    GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum["D"] = "D";
})(GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum = exports.GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum || (exports.GetSchedulesScheduleBSubIdSpenderCommitteeDesignationEnum = {}));
var GetSchedulesScheduleBSubIdSpenderCommitteeOrgTypeEnum;
(function (GetSchedulesScheduleBSubIdSpenderCommitteeOrgTypeEnum) {
    GetSchedulesScheduleBSubIdSpenderCommitteeOrgTypeEnum["Unknown"] = "";
    GetSchedulesScheduleBSubIdSpenderCommitteeOrgTypeEnum["C"] = "C";
    GetSchedulesScheduleBSubIdSpenderCommitteeOrgTypeEnum["L"] = "L";
    GetSchedulesScheduleBSubIdSpenderCommitteeOrgTypeEnum["M"] = "M";
    GetSchedulesScheduleBSubIdSpenderCommitteeOrgTypeEnum["T"] = "T";
    GetSchedulesScheduleBSubIdSpenderCommitteeOrgTypeEnum["V"] = "V";
    GetSchedulesScheduleBSubIdSpenderCommitteeOrgTypeEnum["W"] = "W";
})(GetSchedulesScheduleBSubIdSpenderCommitteeOrgTypeEnum = exports.GetSchedulesScheduleBSubIdSpenderCommitteeOrgTypeEnum || (exports.GetSchedulesScheduleBSubIdSpenderCommitteeOrgTypeEnum = {}));
var GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum;
(function (GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum) {
    GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum["Unknown"] = "";
    GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum["C"] = "C";
    GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum["D"] = "D";
    GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum["E"] = "E";
    GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum["H"] = "H";
    GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum["I"] = "I";
    GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum["N"] = "N";
    GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum["O"] = "O";
    GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum["P"] = "P";
    GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum["Q"] = "Q";
    GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum["S"] = "S";
    GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum["U"] = "U";
    GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum["V"] = "V";
    GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum["W"] = "W";
    GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum["X"] = "X";
    GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum["Y"] = "Y";
    GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum["Z"] = "Z";
})(GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum = exports.GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum || (exports.GetSchedulesScheduleBSubIdSpenderCommitteeTypeEnum = {}));
var GetSchedulesScheduleBSubIdQueryParams = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleBSubIdQueryParams, _super);
    function GetSchedulesScheduleBSubIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=committee_id" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "committeeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=disbursement_description" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "disbursementDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=disbursement_purpose_category" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "disbursementPurposeCategory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=image_number" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "imageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=last_disbursement_amount" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "lastDisbursementAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=last_disbursement_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "lastDisbursementDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=last_index" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "lastIndex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=line_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "lineNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max_amount" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "maxAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "maxDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=max_image_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "maxImageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=min_amount" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "minAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=min_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "minDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=min_image_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "minImageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=recipient_city" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "recipientCity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=recipient_committee_id" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "recipientCommitteeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=recipient_name" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "recipientName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=recipient_state" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "recipientState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=spender_committee_designation" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "spenderCommitteeDesignation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=spender_committee_org_type" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "spenderCommitteeOrgType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=spender_committee_type" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "spenderCommitteeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=two_year_transaction_period" }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleBSubIdQueryParams.prototype, "twoYearTransactionPeriod", void 0);
    return GetSchedulesScheduleBSubIdQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSchedulesScheduleBSubIdQueryParams = GetSchedulesScheduleBSubIdQueryParams;
var GetSchedulesScheduleBSubIdRequest = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleBSubIdRequest, _super);
    function GetSchedulesScheduleBSubIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSchedulesScheduleBSubIdPathParams)
    ], GetSchedulesScheduleBSubIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSchedulesScheduleBSubIdQueryParams)
    ], GetSchedulesScheduleBSubIdRequest.prototype, "queryParams", void 0);
    return GetSchedulesScheduleBSubIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetSchedulesScheduleBSubIdRequest = GetSchedulesScheduleBSubIdRequest;
var GetSchedulesScheduleBSubIdResponse = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleBSubIdResponse, _super);
    function GetSchedulesScheduleBSubIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSchedulesScheduleBSubIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ScheduleBPage)
    ], GetSchedulesScheduleBSubIdResponse.prototype, "scheduleBPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleBSubIdResponse.prototype, "statusCode", void 0);
    return GetSchedulesScheduleBSubIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetSchedulesScheduleBSubIdResponse = GetSchedulesScheduleBSubIdResponse;
