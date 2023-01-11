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
exports.InputDescription = void 0;
var utils_1 = require("../../../internal/utils");
var inputparallelism_1 = require("./inputparallelism");
var inputprocessingconfigurationdescription_1 = require("./inputprocessingconfigurationdescription");
var sourceschema_1 = require("./sourceschema");
var inputstartingpositionconfiguration_1 = require("./inputstartingpositionconfiguration");
var kinesisfirehoseinputdescription_1 = require("./kinesisfirehoseinputdescription");
var kinesisstreamsinputdescription_1 = require("./kinesisstreamsinputdescription");
// InputDescription
/**
 * Describes the application input configuration. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
**/
var InputDescription = /** @class */ (function (_super) {
    __extends(InputDescription, _super);
    function InputDescription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InAppStreamNames" }),
        __metadata("design:type", Array)
    ], InputDescription.prototype, "inAppStreamNames", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InputId" }),
        __metadata("design:type", String)
    ], InputDescription.prototype, "inputId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InputParallelism" }),
        __metadata("design:type", inputparallelism_1.InputParallelism)
    ], InputDescription.prototype, "inputParallelism", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InputProcessingConfigurationDescription" }),
        __metadata("design:type", inputprocessingconfigurationdescription_1.InputProcessingConfigurationDescription)
    ], InputDescription.prototype, "inputProcessingConfigurationDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InputSchema" }),
        __metadata("design:type", sourceschema_1.SourceSchema)
    ], InputDescription.prototype, "inputSchema", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=InputStartingPositionConfiguration" }),
        __metadata("design:type", inputstartingpositionconfiguration_1.InputStartingPositionConfiguration)
    ], InputDescription.prototype, "inputStartingPositionConfiguration", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=KinesisFirehoseInputDescription" }),
        __metadata("design:type", kinesisfirehoseinputdescription_1.KinesisFirehoseInputDescription)
    ], InputDescription.prototype, "kinesisFirehoseInputDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=KinesisStreamsInputDescription" }),
        __metadata("design:type", kinesisstreamsinputdescription_1.KinesisStreamsInputDescription)
    ], InputDescription.prototype, "kinesisStreamsInputDescription", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NamePrefix" }),
        __metadata("design:type", String)
    ], InputDescription.prototype, "namePrefix", void 0);
    return InputDescription;
}(utils_1.SpeakeasyBase));
exports.InputDescription = InputDescription;
