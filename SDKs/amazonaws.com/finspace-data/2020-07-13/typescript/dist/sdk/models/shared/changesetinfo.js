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
exports.ChangesetInfo = void 0;
var utils_1 = require("../../../internal/utils");
var changetypeenum_1 = require("./changetypeenum");
var errorinfo_1 = require("./errorinfo");
var formattypeenum_1 = require("./formattypeenum");
var sourcetypeenum_1 = require("./sourcetypeenum");
var changesetstatusenum_1 = require("./changesetstatusenum");
// ChangesetInfo
/**
 * A changeset is unit of data in a dataset.
**/
var ChangesetInfo = /** @class */ (function (_super) {
    __extends(ChangesetInfo, _super);
    function ChangesetInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=changeType" }),
        __metadata("design:type", String)
    ], ChangesetInfo.prototype, "changeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=changesetArn" }),
        __metadata("design:type", String)
    ], ChangesetInfo.prototype, "changesetArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=changesetLabels" }),
        __metadata("design:type", Object)
    ], ChangesetInfo.prototype, "changesetLabels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=createTimestamp" }),
        __metadata("design:type", Date)
    ], ChangesetInfo.prototype, "createTimestamp", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=datasetId" }),
        __metadata("design:type", String)
    ], ChangesetInfo.prototype, "datasetId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorInfo" }),
        __metadata("design:type", errorinfo_1.ErrorInfo)
    ], ChangesetInfo.prototype, "errorInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=formatParams" }),
        __metadata("design:type", Object)
    ], ChangesetInfo.prototype, "formatParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=formatType" }),
        __metadata("design:type", String)
    ], ChangesetInfo.prototype, "formatType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ChangesetInfo.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceParams" }),
        __metadata("design:type", Object)
    ], ChangesetInfo.prototype, "sourceParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sourceType" }),
        __metadata("design:type", String)
    ], ChangesetInfo.prototype, "sourceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ChangesetInfo.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatedByChangesetId" }),
        __metadata("design:type", String)
    ], ChangesetInfo.prototype, "updatedByChangesetId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updatesChangesetId" }),
        __metadata("design:type", String)
    ], ChangesetInfo.prototype, "updatesChangesetId", void 0);
    return ChangesetInfo;
}(utils_1.SpeakeasyBase));
exports.ChangesetInfo = ChangesetInfo;
