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
exports.UpdateActionList = void 0;
var utils_1 = require("../../../internal/utils");
var cachenodeupdatestatuslist_1 = require("./cachenodeupdatestatuslist");
var nodegroupupdatestatuslist_1 = require("./nodegroupupdatestatuslist");
var serviceupdateseverityenum_1 = require("./serviceupdateseverityenum");
var serviceupdatestatusenum_1 = require("./serviceupdatestatusenum");
var serviceupdatetypeenum_1 = require("./serviceupdatetypeenum");
var slametenum_1 = require("./slametenum");
var updateactionstatusenum_1 = require("./updateactionstatusenum");
// UpdateActionList
/**
 * The status of the service update for a specific replication group
**/
var UpdateActionList = /** @class */ (function (_super) {
    __extends(UpdateActionList, _super);
    function UpdateActionList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateActionList.prototype, "cacheClusterId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: cachenodeupdatestatuslist_1.CacheNodeUpdateStatusList }),
        __metadata("design:type", Array)
    ], UpdateActionList.prototype, "cacheNodeUpdateStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateActionList.prototype, "engine", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateActionList.prototype, "estimatedUpdateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: nodegroupupdatestatuslist_1.NodeGroupUpdateStatusList }),
        __metadata("design:type", Array)
    ], UpdateActionList.prototype, "nodeGroupUpdateStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateActionList.prototype, "nodesUpdated", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateActionList.prototype, "replicationGroupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateActionList.prototype, "serviceUpdateName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Date)
    ], UpdateActionList.prototype, "serviceUpdateRecommendedApplyByDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Date)
    ], UpdateActionList.prototype, "serviceUpdateReleaseDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateActionList.prototype, "serviceUpdateSeverity", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateActionList.prototype, "serviceUpdateStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateActionList.prototype, "serviceUpdateType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateActionList.prototype, "slaMet", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Date)
    ], UpdateActionList.prototype, "updateActionAvailableDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateActionList.prototype, "updateActionStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Date)
    ], UpdateActionList.prototype, "updateActionStatusModifiedDate", void 0);
    return UpdateActionList;
}(utils_1.SpeakeasyBase));
exports.UpdateActionList = UpdateActionList;
