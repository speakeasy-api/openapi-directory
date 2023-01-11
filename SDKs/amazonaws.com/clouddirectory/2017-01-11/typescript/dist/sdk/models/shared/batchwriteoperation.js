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
exports.BatchWriteOperation = void 0;
var utils_1 = require("../../../internal/utils");
var batchaddfacettoobject_1 = require("./batchaddfacettoobject");
var batchattachobject_1 = require("./batchattachobject");
var batchattachpolicy_1 = require("./batchattachpolicy");
var batchattachtoindex_1 = require("./batchattachtoindex");
var batchattachtypedlink_1 = require("./batchattachtypedlink");
var batchcreateindex_1 = require("./batchcreateindex");
var batchcreateobject_1 = require("./batchcreateobject");
var batchdeleteobject_1 = require("./batchdeleteobject");
var batchdetachfromindex_1 = require("./batchdetachfromindex");
var batchdetachobject_1 = require("./batchdetachobject");
var batchdetachpolicy_1 = require("./batchdetachpolicy");
var batchdetachtypedlink_1 = require("./batchdetachtypedlink");
var batchremovefacetfromobject_1 = require("./batchremovefacetfromobject");
var batchupdatelinkattributes_1 = require("./batchupdatelinkattributes");
var batchupdateobjectattributes_1 = require("./batchupdateobjectattributes");
// BatchWriteOperation
/**
 * Represents the output of a <code>BatchWrite</code> operation.
**/
var BatchWriteOperation = /** @class */ (function (_super) {
    __extends(BatchWriteOperation, _super);
    function BatchWriteOperation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AddFacetToObject" }),
        __metadata("design:type", batchaddfacettoobject_1.BatchAddFacetToObject)
    ], BatchWriteOperation.prototype, "addFacetToObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AttachObject" }),
        __metadata("design:type", batchattachobject_1.BatchAttachObject)
    ], BatchWriteOperation.prototype, "attachObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AttachPolicy" }),
        __metadata("design:type", batchattachpolicy_1.BatchAttachPolicy)
    ], BatchWriteOperation.prototype, "attachPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AttachToIndex" }),
        __metadata("design:type", batchattachtoindex_1.BatchAttachToIndex)
    ], BatchWriteOperation.prototype, "attachToIndex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=AttachTypedLink" }),
        __metadata("design:type", batchattachtypedlink_1.BatchAttachTypedLink)
    ], BatchWriteOperation.prototype, "attachTypedLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreateIndex" }),
        __metadata("design:type", batchcreateindex_1.BatchCreateIndex)
    ], BatchWriteOperation.prototype, "createIndex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=CreateObject" }),
        __metadata("design:type", batchcreateobject_1.BatchCreateObject)
    ], BatchWriteOperation.prototype, "createObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DeleteObject" }),
        __metadata("design:type", batchdeleteobject_1.BatchDeleteObject)
    ], BatchWriteOperation.prototype, "deleteObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DetachFromIndex" }),
        __metadata("design:type", batchdetachfromindex_1.BatchDetachFromIndex)
    ], BatchWriteOperation.prototype, "detachFromIndex", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DetachObject" }),
        __metadata("design:type", batchdetachobject_1.BatchDetachObject)
    ], BatchWriteOperation.prototype, "detachObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DetachPolicy" }),
        __metadata("design:type", batchdetachpolicy_1.BatchDetachPolicy)
    ], BatchWriteOperation.prototype, "detachPolicy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DetachTypedLink" }),
        __metadata("design:type", batchdetachtypedlink_1.BatchDetachTypedLink)
    ], BatchWriteOperation.prototype, "detachTypedLink", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RemoveFacetFromObject" }),
        __metadata("design:type", batchremovefacetfromobject_1.BatchRemoveFacetFromObject)
    ], BatchWriteOperation.prototype, "removeFacetFromObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdateLinkAttributes" }),
        __metadata("design:type", batchupdatelinkattributes_1.BatchUpdateLinkAttributes)
    ], BatchWriteOperation.prototype, "updateLinkAttributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdateObjectAttributes" }),
        __metadata("design:type", batchupdateobjectattributes_1.BatchUpdateObjectAttributes)
    ], BatchWriteOperation.prototype, "updateObjectAttributes", void 0);
    return BatchWriteOperation;
}(utils_1.SpeakeasyBase));
exports.BatchWriteOperation = BatchWriteOperation;
