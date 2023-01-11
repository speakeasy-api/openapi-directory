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
exports.BatchReadOperation = void 0;
var utils_1 = require("../../../internal/utils");
var batchgetlinkattributes_1 = require("./batchgetlinkattributes");
var batchgetobjectattributes_1 = require("./batchgetobjectattributes");
var batchgetobjectinformation_1 = require("./batchgetobjectinformation");
var batchlistattachedindices_1 = require("./batchlistattachedindices");
var batchlistincomingtypedlinks_1 = require("./batchlistincomingtypedlinks");
var batchlistindex_1 = require("./batchlistindex");
var batchlistobjectattributes_1 = require("./batchlistobjectattributes");
var batchlistobjectchildren_1 = require("./batchlistobjectchildren");
var batchlistobjectparentpaths_1 = require("./batchlistobjectparentpaths");
var batchlistobjectpolicies_1 = require("./batchlistobjectpolicies");
var batchlistoutgoingtypedlinks_1 = require("./batchlistoutgoingtypedlinks");
var batchlistpolicyattachments_1 = require("./batchlistpolicyattachments");
var batchlookuppolicy_1 = require("./batchlookuppolicy");
// BatchReadOperation
/**
 * Represents the output of a <code>BatchRead</code> operation.
**/
var BatchReadOperation = /** @class */ (function (_super) {
    __extends(BatchReadOperation, _super);
    function BatchReadOperation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=GetLinkAttributes" }),
        __metadata("design:type", batchgetlinkattributes_1.BatchGetLinkAttributes)
    ], BatchReadOperation.prototype, "getLinkAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=GetObjectAttributes" }),
        __metadata("design:type", batchgetobjectattributes_1.BatchGetObjectAttributes)
    ], BatchReadOperation.prototype, "getObjectAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=GetObjectInformation" }),
        __metadata("design:type", batchgetobjectinformation_1.BatchGetObjectInformation)
    ], BatchReadOperation.prototype, "getObjectInformation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ListAttachedIndices" }),
        __metadata("design:type", batchlistattachedindices_1.BatchListAttachedIndices)
    ], BatchReadOperation.prototype, "listAttachedIndices", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ListIncomingTypedLinks" }),
        __metadata("design:type", batchlistincomingtypedlinks_1.BatchListIncomingTypedLinks)
    ], BatchReadOperation.prototype, "listIncomingTypedLinks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ListIndex" }),
        __metadata("design:type", batchlistindex_1.BatchListIndex)
    ], BatchReadOperation.prototype, "listIndex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ListObjectAttributes" }),
        __metadata("design:type", batchlistobjectattributes_1.BatchListObjectAttributes)
    ], BatchReadOperation.prototype, "listObjectAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ListObjectChildren" }),
        __metadata("design:type", batchlistobjectchildren_1.BatchListObjectChildren)
    ], BatchReadOperation.prototype, "listObjectChildren", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ListObjectParentPaths" }),
        __metadata("design:type", batchlistobjectparentpaths_1.BatchListObjectParentPaths)
    ], BatchReadOperation.prototype, "listObjectParentPaths", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ListObjectPolicies" }),
        __metadata("design:type", batchlistobjectpolicies_1.BatchListObjectPolicies)
    ], BatchReadOperation.prototype, "listObjectPolicies", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ListOutgoingTypedLinks" }),
        __metadata("design:type", batchlistoutgoingtypedlinks_1.BatchListOutgoingTypedLinks)
    ], BatchReadOperation.prototype, "listOutgoingTypedLinks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ListPolicyAttachments" }),
        __metadata("design:type", batchlistpolicyattachments_1.BatchListPolicyAttachments)
    ], BatchReadOperation.prototype, "listPolicyAttachments", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=LookupPolicy" }),
        __metadata("design:type", batchlookuppolicy_1.BatchLookupPolicy)
    ], BatchReadOperation.prototype, "lookupPolicy", void 0);
    return BatchReadOperation;
}(utils_1.SpeakeasyBase));
exports.BatchReadOperation = BatchReadOperation;
