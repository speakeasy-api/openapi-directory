"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.GetSchedulesScheduleDSubIdResponse = exports.GetSchedulesScheduleDSubIdDefaultApplicationJSON = exports.GetSchedulesScheduleDSubIdDefaultApplicationJSONResults = exports.GetSchedulesScheduleDSubIdRequest = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var class_transformer_1 = require("class-transformer");
var GetSchedulesScheduleDSubIdRequest = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleDSubIdRequest, _super);
    function GetSchedulesScheduleDSubIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=api_key",
        }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdRequest.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdRequest.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=per_page",
        }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdRequest.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdRequest.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=sort_hide_null",
        }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleDSubIdRequest.prototype, "sortHideNull", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=sort_null_only",
        }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleDSubIdRequest.prototype, "sortNullOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "queryParam, style=form;explode=true;name=sort_nulls_last",
        }),
        __metadata("design:type", Boolean)
    ], GetSchedulesScheduleDSubIdRequest.prototype, "sortNullsLast", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=sub_id",
        }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdRequest.prototype, "subId", void 0);
    return GetSchedulesScheduleDSubIdRequest;
}(utils_1.SpeakeasyBase));
exports.GetSchedulesScheduleDSubIdRequest = GetSchedulesScheduleDSubIdRequest;
var GetSchedulesScheduleDSubIdDefaultApplicationJSONResults = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleDSubIdDefaultApplicationJSONResults, _super);
    function GetSchedulesScheduleDSubIdDefaultApplicationJSONResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "action_code" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "actionCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "action_code_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "actionCodeFull", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "amount_incurred_period" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "amountIncurredPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "candidate_first_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "candidateFirstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "candidate_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "candidateId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "candidate_last_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "candidateLastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "candidate_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "candidateName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "candidate_office" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "candidateOffice", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "candidate_office_district" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "candidateOfficeDistrict", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "candidate_office_state" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "candidateOfficeState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "candidate_office_state_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "candidateOfficeStateFull", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "committee" }),
        (0, class_transformer_1.Type)(function () { return shared.CommitteeHistory; }),
        __metadata("design:type", shared.CommitteeHistory)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "committee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "committee_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "committeeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "committee_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "committeeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "conduit_committee_city" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "conduitCommitteeCity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "conduit_committee_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "conduitCommitteeId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "conduit_committee_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "conduitCommitteeName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "conduit_committee_state" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "conduitCommitteeState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "conduit_committee_street1" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "conduitCommitteeStreet1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "conduit_committee_street2" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "conduitCommitteeStreet2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "conduit_committee_zip" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "conduitCommitteeZip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "creditor_debtor_city" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "creditorDebtorCity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "creditor_debtor_first_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "creditorDebtorFirstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "creditor_debtor_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "creditorDebtorId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "creditor_debtor_last_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "creditorDebtorLastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "creditor_debtor_middle_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "creditorDebtorMiddleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "creditor_debtor_name" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "creditorDebtorName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "creditor_debtor_prefix" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "creditorDebtorPrefix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "creditor_debtor_state" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "creditorDebtorState", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "creditor_debtor_street1" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "creditorDebtorStreet1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "creditor_debtor_street2" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "creditorDebtorStreet2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "creditor_debtor_suffix" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "creditorDebtorSuffix", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "election_cycle" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "electionCycle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "entity_type" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "entityType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "file_number" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "fileNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "filing_form" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "filingForm", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "image_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "imageNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "line_number" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "lineNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "link_id" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "linkId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "load_date" }),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return new Date(value);
        }, { toClassOnly: true }),
        __metadata("design:type", Date)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "loadDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "nature_of_debt" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "natureOfDebt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "original_sub_id" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "originalSubId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "outstanding_balance_beginning_of_period" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "outstandingBalanceBeginningOfPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "outstanding_balance_close_of_period" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "outstandingBalanceCloseOfPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "payment_period" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "paymentPeriod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "pdf_url" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "pdfUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "report_type" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "reportType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "report_year" }),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "reportYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "schedule_type" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "scheduleType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "schedule_type_full" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "scheduleTypeFull", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "sub_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "subId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "transaction_id" }),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSONResults.prototype, "transactionId", void 0);
    return GetSchedulesScheduleDSubIdDefaultApplicationJSONResults;
}(utils_1.SpeakeasyBase));
exports.GetSchedulesScheduleDSubIdDefaultApplicationJSONResults = GetSchedulesScheduleDSubIdDefaultApplicationJSONResults;
var GetSchedulesScheduleDSubIdDefaultApplicationJSON = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleDSubIdDefaultApplicationJSON, _super);
    function GetSchedulesScheduleDSubIdDefaultApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "pagination" }),
        (0, class_transformer_1.Type)(function () { return shared.OffsetInfo; }),
        __metadata("design:type", shared.OffsetInfo)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSON.prototype, "pagination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            elemType: GetSchedulesScheduleDSubIdDefaultApplicationJSONResults,
        }),
        (0, class_transformer_1.Expose)({ name: "results" }),
        (0, class_transformer_1.Type)(function () { return GetSchedulesScheduleDSubIdDefaultApplicationJSONResults; }),
        __metadata("design:type", Array)
    ], GetSchedulesScheduleDSubIdDefaultApplicationJSON.prototype, "results", void 0);
    return GetSchedulesScheduleDSubIdDefaultApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.GetSchedulesScheduleDSubIdDefaultApplicationJSON = GetSchedulesScheduleDSubIdDefaultApplicationJSON;
var GetSchedulesScheduleDSubIdResponse = /** @class */ (function (_super) {
    __extends(GetSchedulesScheduleDSubIdResponse, _super);
    function GetSchedulesScheduleDSubIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetSchedulesScheduleDSubIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetSchedulesScheduleDSubIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetSchedulesScheduleDSubIdResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetSchedulesScheduleDSubIdDefaultApplicationJSON)
    ], GetSchedulesScheduleDSubIdResponse.prototype, "getSchedulesScheduleDSubIdDefaultApplicationJSONObject", void 0);
    return GetSchedulesScheduleDSubIdResponse;
}(utils_1.SpeakeasyBase));
exports.GetSchedulesScheduleDSubIdResponse = GetSchedulesScheduleDSubIdResponse;
