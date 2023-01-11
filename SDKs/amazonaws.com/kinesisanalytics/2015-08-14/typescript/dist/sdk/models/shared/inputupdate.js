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
exports.InputUpdate = void 0;
var utils_1 = require("../../../internal/utils");
var inputparallelismupdate_1 = require("./inputparallelismupdate");
var inputprocessingconfigurationupdate_1 = require("./inputprocessingconfigurationupdate");
var inputschemaupdate_1 = require("./inputschemaupdate");
var kinesisfirehoseinputupdate_1 = require("./kinesisfirehoseinputupdate");
var kinesisstreamsinputupdate_1 = require("./kinesisstreamsinputupdate");
// InputUpdate
/**
 * Describes updates to a specific input configuration (identified by the <code>InputId</code> of an application).
**/
var InputUpdate = /** @class */ (function (_super) {
    __extends(InputUpdate, _super);
    function InputUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InputId" }),
        __metadata("design:type", String)
    ], InputUpdate.prototype, "inputId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InputParallelismUpdate" }),
        __metadata("design:type", inputparallelismupdate_1.InputParallelismUpdate)
    ], InputUpdate.prototype, "inputParallelismUpdate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InputProcessingConfigurationUpdate" }),
        __metadata("design:type", inputprocessingconfigurationupdate_1.InputProcessingConfigurationUpdate)
    ], InputUpdate.prototype, "inputProcessingConfigurationUpdate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InputSchemaUpdate" }),
        __metadata("design:type", inputschemaupdate_1.InputSchemaUpdate)
    ], InputUpdate.prototype, "inputSchemaUpdate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=KinesisFirehoseInputUpdate" }),
        __metadata("design:type", kinesisfirehoseinputupdate_1.KinesisFirehoseInputUpdate)
    ], InputUpdate.prototype, "kinesisFirehoseInputUpdate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=KinesisStreamsInputUpdate" }),
        __metadata("design:type", kinesisstreamsinputupdate_1.KinesisStreamsInputUpdate)
    ], InputUpdate.prototype, "kinesisStreamsInputUpdate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NamePrefixUpdate" }),
        __metadata("design:type", String)
    ], InputUpdate.prototype, "namePrefixUpdate", void 0);
    return InputUpdate;
}(utils_1.SpeakeasyBase));
exports.InputUpdate = InputUpdate;
