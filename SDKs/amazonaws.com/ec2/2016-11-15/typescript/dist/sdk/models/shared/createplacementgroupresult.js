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
exports.CreatePlacementGroupResult = exports.CreatePlacementGroupResultPlacementGroup = void 0;
var utils_1 = require("../../../internal/utils");
// CreatePlacementGroupResultPlacementGroup
/**
 * Describes a placement group.
**/
var CreatePlacementGroupResultPlacementGroup = /** @class */ (function (_super) {
    __extends(CreatePlacementGroupResultPlacementGroup, _super);
    function CreatePlacementGroupResultPlacementGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreatePlacementGroupResultPlacementGroup.prototype, "groupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreatePlacementGroupResultPlacementGroup.prototype, "groupName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreatePlacementGroupResultPlacementGroup.prototype, "partitionCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreatePlacementGroupResultPlacementGroup.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreatePlacementGroupResultPlacementGroup.prototype, "strategy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], CreatePlacementGroupResultPlacementGroup.prototype, "tags", void 0);
    return CreatePlacementGroupResultPlacementGroup;
}(utils_1.SpeakeasyBase));
exports.CreatePlacementGroupResultPlacementGroup = CreatePlacementGroupResultPlacementGroup;
var CreatePlacementGroupResult = /** @class */ (function (_super) {
    __extends(CreatePlacementGroupResult, _super);
    function CreatePlacementGroupResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CreatePlacementGroupResultPlacementGroup)
    ], CreatePlacementGroupResult.prototype, "placementGroup", void 0);
    return CreatePlacementGroupResult;
}(utils_1.SpeakeasyBase));
exports.CreatePlacementGroupResult = CreatePlacementGroupResult;
