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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchReadSuccessfulResponse = void 0;
var utils_1 = require("../../../internal/utils");
var batchgetlinkattributesresponse_1 = require("./batchgetlinkattributesresponse");
var batchgetobjectattributesresponse_1 = require("./batchgetobjectattributesresponse");
var batchgetobjectinformationresponse_1 = require("./batchgetobjectinformationresponse");
var batchlistattachedindicesresponse_1 = require("./batchlistattachedindicesresponse");
var batchlistincomingtypedlinksresponse_1 = require("./batchlistincomingtypedlinksresponse");
var batchlistindexresponse_1 = require("./batchlistindexresponse");
var batchlistobjectattributesresponse_1 = require("./batchlistobjectattributesresponse");
var batchlistobjectchildrenresponse_1 = require("./batchlistobjectchildrenresponse");
var batchlistobjectparentpathsresponse_1 = require("./batchlistobjectparentpathsresponse");
var batchlistobjectparentsresponse_1 = require("./batchlistobjectparentsresponse");
var batchlistobjectpoliciesresponse_1 = require("./batchlistobjectpoliciesresponse");
var batchlistoutgoingtypedlinksresponse_1 = require("./batchlistoutgoingtypedlinksresponse");
var batchlistpolicyattachmentsresponse_1 = require("./batchlistpolicyattachmentsresponse");
var batchlookuppolicyresponse_1 = require("./batchlookuppolicyresponse");
// BatchReadSuccessfulResponse
/**
 * Represents the output of a <code>BatchRead</code> success response operation.
**/
var BatchReadSuccessfulResponse = /** @class */ (function (_super) {
    __extends(BatchReadSuccessfulResponse, _super);
    function BatchReadSuccessfulResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=GetLinkAttributes" }),
        __metadata("design:type", batchgetlinkattributesresponse_1.BatchGetLinkAttributesResponse)
    ], BatchReadSuccessfulResponse.prototype, "getLinkAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=GetObjectAttributes" }),
        __metadata("design:type", batchgetobjectattributesresponse_1.BatchGetObjectAttributesResponse)
    ], BatchReadSuccessfulResponse.prototype, "getObjectAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=GetObjectInformation" }),
        __metadata("design:type", batchgetobjectinformationresponse_1.BatchGetObjectInformationResponse)
    ], BatchReadSuccessfulResponse.prototype, "getObjectInformation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ListAttachedIndices" }),
        __metadata("design:type", batchlistattachedindicesresponse_1.BatchListAttachedIndicesResponse)
    ], BatchReadSuccessfulResponse.prototype, "listAttachedIndices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ListIncomingTypedLinks" }),
        __metadata("design:type", batchlistincomingtypedlinksresponse_1.BatchListIncomingTypedLinksResponse)
    ], BatchReadSuccessfulResponse.prototype, "listIncomingTypedLinks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ListIndex" }),
        __metadata("design:type", batchlistindexresponse_1.BatchListIndexResponse)
    ], BatchReadSuccessfulResponse.prototype, "listIndex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ListObjectAttributes" }),
        __metadata("design:type", batchlistobjectattributesresponse_1.BatchListObjectAttributesResponse)
    ], BatchReadSuccessfulResponse.prototype, "listObjectAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ListObjectChildren" }),
        __metadata("design:type", batchlistobjectchildrenresponse_1.BatchListObjectChildrenResponse)
    ], BatchReadSuccessfulResponse.prototype, "listObjectChildren", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ListObjectParentPaths" }),
        __metadata("design:type", batchlistobjectparentpathsresponse_1.BatchListObjectParentPathsResponse)
    ], BatchReadSuccessfulResponse.prototype, "listObjectParentPaths", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ListObjectParents" }),
        __metadata("design:type", batchlistobjectparentsresponse_1.BatchListObjectParentsResponse)
    ], BatchReadSuccessfulResponse.prototype, "listObjectParents", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ListObjectPolicies" }),
        __metadata("design:type", batchlistobjectpoliciesresponse_1.BatchListObjectPoliciesResponse)
    ], BatchReadSuccessfulResponse.prototype, "listObjectPolicies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ListOutgoingTypedLinks" }),
        __metadata("design:type", batchlistoutgoingtypedlinksresponse_1.BatchListOutgoingTypedLinksResponse)
    ], BatchReadSuccessfulResponse.prototype, "listOutgoingTypedLinks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ListPolicyAttachments" }),
        __metadata("design:type", batchlistpolicyattachmentsresponse_1.BatchListPolicyAttachmentsResponse)
    ], BatchReadSuccessfulResponse.prototype, "listPolicyAttachments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LookupPolicy" }),
        __metadata("design:type", batchlookuppolicyresponse_1.BatchLookupPolicyResponse)
    ], BatchReadSuccessfulResponse.prototype, "lookupPolicy", void 0);
    return BatchReadSuccessfulResponse;
}(utils_1.SpeakeasyBase));
exports.BatchReadSuccessfulResponse = BatchReadSuccessfulResponse;
