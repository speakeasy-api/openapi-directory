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
exports.GetSchedulesScheduleCSubIdResponse = exports.GetSchedulesScheduleCSubIdRequest = exports.GetSchedulesScheduleCSubIdDefaultApplicationJson = exports.GetSchedulesScheduleCSubIdDefaultApplicationJsonResults = exports.GetSchedulesScheduleCSubIdQueryParams = exports.GetSchedulesScheduleCSubIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetSchedulesScheduleCSubIdPathParams = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleCSubIdPathParams, _super);
    function GetSchedulesScheduleCSubIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=sub_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdPathParams.prototype, "subId", void 0);
    return GetSchedulesScheduleCSubIdPathParams;
}(utils_1.SpeakeasyBase));
exports.GetSchedulesScheduleCSubIdPathParams = GetSchedulesScheduleCSubIdPathParams;
var GetSchedulesScheduleCSubIdQueryParams = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleCSubIdQueryParams, _super);
    function GetSchedulesScheduleCSubIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdQueryParams.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCSubIdQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCSubIdQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleCSubIdQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleCSubIdQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleCSubIdQueryParams.prototype, "sortNullsLast", void 0);
    return GetSchedulesScheduleCSubIdQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetSchedulesScheduleCSubIdQueryParams = GetSchedulesScheduleCSubIdQueryParams;
var GetSchedulesScheduleCSubIdDefaultApplicationJsonResults = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleCSubIdDefaultApplicationJsonResults, _super);
    function GetSchedulesScheduleCSubIdDefaultApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action_code" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "actionCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=action_code_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "actionCodeFull", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=candidate_first_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "candidateFirstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=candidate_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "candidateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=candidate_last_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "candidateLastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=candidate_middle_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "candidateMiddleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=candidate_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "candidateName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=candidate_office" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "candidateOffice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=candidate_office_district" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "candidateOfficeDistrict", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=candidate_office_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "candidateOfficeFull", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=candidate_office_state" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "candidateOfficeState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=candidate_office_state_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "candidateOfficeStateFull", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=candidate_prefix" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "candidatePrefix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=candidate_suffix" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "candidateSuffix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=committee" }),
        __metadata("design:type", shared.CommitteeHistory)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "committee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=committee_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "committeeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cycle" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "cycle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=due_date_terms" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "dueDateTerms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=election_type" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "electionType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=election_type_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "electionTypeFull", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entity_type" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "entityType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=entity_type_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "entityTypeFull", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fec_committee_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "fecCommitteeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fec_election_type_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "fecElectionTypeFull", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fec_election_type_year" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "fecElectionTypeYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=file_number" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "fileNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=filing_form" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "filingForm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "imageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=incurred_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "incurredDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=interest_rate_terms" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "interestRateTerms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=line_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "lineNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link_id" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "linkId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=load_date" }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "loadDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loan_balance" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "loanBalance", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loan_source_city" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "loanSourceCity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loan_source_first_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "loanSourceFirstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loan_source_last_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "loanSourceLastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loan_source_middle_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "loanSourceMiddleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loan_source_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "loanSourceName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loan_source_prefix" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "loanSourcePrefix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loan_source_state" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "loanSourceState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loan_source_street_1" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "loanSourceStreet1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loan_source_street_2" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "loanSourceStreet2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loan_source_suffix" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "loanSourceSuffix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=loan_source_zip" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "loanSourceZip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memo_code" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "memoCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memo_text" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "memoText", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=original_loan_amount" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "originalLoanAmount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=original_sub_id" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "originalSubId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=payment_to_date" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "paymentToDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pdf_url" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "pdfUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=personally_funded" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "personallyFunded", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=report_type" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "reportType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=report_year" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "reportYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule_a_line_number" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "scheduleALineNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule_type" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "scheduleType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=schedule_type_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "scheduleTypeFull", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=secured_ind" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "securedInd", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sub_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "subId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transaction_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJsonResults.prototype, "transactionId", void 0);
    return GetSchedulesScheduleCSubIdDefaultApplicationJsonResults;
}(utils_1.SpeakeasyBase));
exports.GetSchedulesScheduleCSubIdDefaultApplicationJsonResults = GetSchedulesScheduleCSubIdDefaultApplicationJsonResults;
var GetSchedulesScheduleCSubIdDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleCSubIdDefaultApplicationJson, _super);
    function GetSchedulesScheduleCSubIdDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pagination" }),
        __metadata("design:type", shared.OffsetInfo)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJson.prototype, "pagination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=results", elemType: GetSchedulesScheduleCSubIdDefaultApplicationJsonResults }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleCSubIdDefaultApplicationJson.prototype, "results", void 0);
    return GetSchedulesScheduleCSubIdDefaultApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetSchedulesScheduleCSubIdDefaultApplicationJson = GetSchedulesScheduleCSubIdDefaultApplicationJson;
var GetSchedulesScheduleCSubIdRequest = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleCSubIdRequest, _super);
    function GetSchedulesScheduleCSubIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSchedulesScheduleCSubIdPathParams)
    ], GetSchedulesScheduleCSubIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSchedulesScheduleCSubIdQueryParams)
    ], GetSchedulesScheduleCSubIdRequest.prototype, "queryParams", void 0);
    return GetSchedulesScheduleCSubIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetSchedulesScheduleCSubIdRequest = GetSchedulesScheduleCSubIdRequest;
var GetSchedulesScheduleCSubIdResponse = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleCSubIdResponse, _super);
    function GetSchedulesScheduleCSubIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSchedulesScheduleCSubIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleCSubIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSchedulesScheduleCSubIdDefaultApplicationJson)
    ], GetSchedulesScheduleCSubIdResponse.prototype, "getSchedulesScheduleCSubIdDefaultApplicationJSONObject", void 0);
    return GetSchedulesScheduleCSubIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetSchedulesScheduleCSubIdResponse = GetSchedulesScheduleCSubIdResponse;
