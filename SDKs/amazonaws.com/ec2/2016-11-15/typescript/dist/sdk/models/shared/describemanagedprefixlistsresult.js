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
exports.DescribeManagedPrefixListsResult = exports.DescribeManagedPrefixListsResultPrefixLists = exports.DescribeManagedPrefixListsResultPrefixListsTags = exports.DescribeManagedPrefixListsResultPrefixListsStateEnum = void 0;
var utils_1 = require("../../../internal/utils");
/**
 * The current state of the prefix list.
 */
var DescribeManagedPrefixListsResultPrefixListsStateEnum;
(function (DescribeManagedPrefixListsResultPrefixListsStateEnum) {
    DescribeManagedPrefixListsResultPrefixListsStateEnum["CreateInProgress"] = "create-in-progress";
    DescribeManagedPrefixListsResultPrefixListsStateEnum["CreateComplete"] = "create-complete";
    DescribeManagedPrefixListsResultPrefixListsStateEnum["CreateFailed"] = "create-failed";
    DescribeManagedPrefixListsResultPrefixListsStateEnum["ModifyInProgress"] = "modify-in-progress";
    DescribeManagedPrefixListsResultPrefixListsStateEnum["ModifyComplete"] = "modify-complete";
    DescribeManagedPrefixListsResultPrefixListsStateEnum["ModifyFailed"] = "modify-failed";
    DescribeManagedPrefixListsResultPrefixListsStateEnum["RestoreInProgress"] = "restore-in-progress";
    DescribeManagedPrefixListsResultPrefixListsStateEnum["RestoreComplete"] = "restore-complete";
    DescribeManagedPrefixListsResultPrefixListsStateEnum["RestoreFailed"] = "restore-failed";
    DescribeManagedPrefixListsResultPrefixListsStateEnum["DeleteInProgress"] = "delete-in-progress";
    DescribeManagedPrefixListsResultPrefixListsStateEnum["DeleteComplete"] = "delete-complete";
    DescribeManagedPrefixListsResultPrefixListsStateEnum["DeleteFailed"] = "delete-failed";
})(DescribeManagedPrefixListsResultPrefixListsStateEnum = exports.DescribeManagedPrefixListsResultPrefixListsStateEnum || (exports.DescribeManagedPrefixListsResultPrefixListsStateEnum = {}));
/**
 * Describes a tag.
 */
var DescribeManagedPrefixListsResultPrefixListsTags = /** @class */ (function (_super) {
    __extends(DescribeManagedPrefixListsResultPrefixListsTags, _super);
    function DescribeManagedPrefixListsResultPrefixListsTags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DescribeManagedPrefixListsResultPrefixListsTags.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DescribeManagedPrefixListsResultPrefixListsTags.prototype, "value", void 0);
    return DescribeManagedPrefixListsResultPrefixListsTags;
}(utils_1.SpeakeasyBase));
exports.DescribeManagedPrefixListsResultPrefixListsTags = DescribeManagedPrefixListsResultPrefixListsTags;
/**
 * Describes a managed prefix list.
 */
var DescribeManagedPrefixListsResultPrefixLists = /** @class */ (function (_super) {
    __extends(DescribeManagedPrefixListsResultPrefixLists, _super);
    function DescribeManagedPrefixListsResultPrefixLists() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DescribeManagedPrefixListsResultPrefixLists.prototype, "addressFamily", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DescribeManagedPrefixListsResultPrefixLists.prototype, "maxEntries", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DescribeManagedPrefixListsResultPrefixLists.prototype, "ownerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DescribeManagedPrefixListsResultPrefixLists.prototype, "prefixListArn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DescribeManagedPrefixListsResultPrefixLists.prototype, "prefixListId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DescribeManagedPrefixListsResultPrefixLists.prototype, "prefixListName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DescribeManagedPrefixListsResultPrefixLists.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DescribeManagedPrefixListsResultPrefixLists.prototype, "stateMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            elemType: DescribeManagedPrefixListsResultPrefixListsTags,
        }),
        __metadata("design:type", Array)
    ], DescribeManagedPrefixListsResultPrefixLists.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DescribeManagedPrefixListsResultPrefixLists.prototype, "version", void 0);
    return DescribeManagedPrefixListsResultPrefixLists;
}(utils_1.SpeakeasyBase));
exports.DescribeManagedPrefixListsResultPrefixLists = DescribeManagedPrefixListsResultPrefixLists;
/**
 * Success
 */
var DescribeManagedPrefixListsResult = /** @class */ (function (_super) {
    __extends(DescribeManagedPrefixListsResult, _super);
    function DescribeManagedPrefixListsResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DescribeManagedPrefixListsResult.prototype, "nextToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: DescribeManagedPrefixListsResultPrefixLists }),
        __metadata("design:type", Array)
    ], DescribeManagedPrefixListsResult.prototype, "prefixLists", void 0);
    return DescribeManagedPrefixListsResult;
}(utils_1.SpeakeasyBase));
exports.DescribeManagedPrefixListsResult = DescribeManagedPrefixListsResult;
