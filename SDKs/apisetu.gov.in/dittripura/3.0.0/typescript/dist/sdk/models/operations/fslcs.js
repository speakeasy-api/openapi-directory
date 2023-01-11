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
exports.FslcsResponse = exports.FslcsRequest = exports.Fslcs504ApplicationJson = exports.Fslcs504ApplicationJsonErrorDescriptionEnum = exports.Fslcs504ApplicationJsonErrorEnum = exports.Fslcs503ApplicationJson = exports.Fslcs503ApplicationJsonErrorDescriptionEnum = exports.Fslcs503ApplicationJsonErrorEnum = exports.Fslcs502ApplicationJson = exports.Fslcs502ApplicationJsonErrorDescriptionEnum = exports.Fslcs502ApplicationJsonErrorEnum = exports.Fslcs500ApplicationJson = exports.Fslcs500ApplicationJsonErrorDescriptionEnum = exports.Fslcs500ApplicationJsonErrorEnum = exports.Fslcs404ApplicationJson = exports.Fslcs404ApplicationJsonErrorDescriptionEnum = exports.Fslcs404ApplicationJsonErrorEnum = exports.Fslcs401ApplicationJson = exports.Fslcs401ApplicationJsonErrorDescriptionEnum = exports.Fslcs401ApplicationJsonErrorEnum = exports.Fslcs400ApplicationJson = exports.Fslcs400ApplicationJsonErrorDescriptionEnum = exports.Fslcs400ApplicationJsonErrorEnum = exports.FslcsSecurity = exports.FslcsRequestBody = exports.FslcsRequestBodyFormatEnum = exports.FslcsRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var FslcsRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(FslcsRequestBodyCertificateParameters, _super);
    function FslcsRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RefNo" }),
        __metadata("design:type", String)
    ], FslcsRequestBodyCertificateParameters.prototype, "refNo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TokenNo" }),
        __metadata("design:type", String)
    ], FslcsRequestBodyCertificateParameters.prototype, "tokenNo", void 0);
    return FslcsRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.FslcsRequestBodyCertificateParameters = FslcsRequestBodyCertificateParameters;
var FslcsRequestBodyFormatEnum;
(function (FslcsRequestBodyFormatEnum) {
    FslcsRequestBodyFormatEnum["Pdf"] = "pdf";
})(FslcsRequestBodyFormatEnum = exports.FslcsRequestBodyFormatEnum || (exports.FslcsRequestBodyFormatEnum = {}));
var FslcsRequestBody = /** @class */ (function (_super) {
    __extends(FslcsRequestBody, _super);
    function FslcsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", FslcsRequestBodyCertificateParameters)
    ], FslcsRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], FslcsRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], FslcsRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], FslcsRequestBody.prototype, "txnId", void 0);
    return FslcsRequestBody;
}(utils_1.SpeakeasyBase));
exports.FslcsRequestBody = FslcsRequestBody;
var FslcsSecurity = /** @class */ (function (_super) {
    __extends(FslcsSecurity, _super);
    function FslcsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], FslcsSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], FslcsSecurity.prototype, "clientId", void 0);
    return FslcsSecurity;
}(utils_1.SpeakeasyBase));
exports.FslcsSecurity = FslcsSecurity;
var Fslcs400ApplicationJsonErrorEnum;
(function (Fslcs400ApplicationJsonErrorEnum) {
    Fslcs400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Fslcs400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Fslcs400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Fslcs400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Fslcs400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Fslcs400ApplicationJsonErrorEnum = exports.Fslcs400ApplicationJsonErrorEnum || (exports.Fslcs400ApplicationJsonErrorEnum = {}));
var Fslcs400ApplicationJsonErrorDescriptionEnum;
(function (Fslcs400ApplicationJsonErrorDescriptionEnum) {
    Fslcs400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Fslcs400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Fslcs400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Fslcs400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Fslcs400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Fslcs400ApplicationJsonErrorDescriptionEnum = exports.Fslcs400ApplicationJsonErrorDescriptionEnum || (exports.Fslcs400ApplicationJsonErrorDescriptionEnum = {}));
var Fslcs400ApplicationJson = /** @class */ (function (_super) {
    __extends(Fslcs400ApplicationJson, _super);
    function Fslcs400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fslcs400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fslcs400ApplicationJson.prototype, "errorDescription", void 0);
    return Fslcs400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Fslcs400ApplicationJson = Fslcs400ApplicationJson;
var Fslcs401ApplicationJsonErrorEnum;
(function (Fslcs401ApplicationJsonErrorEnum) {
    Fslcs401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Fslcs401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Fslcs401ApplicationJsonErrorEnum = exports.Fslcs401ApplicationJsonErrorEnum || (exports.Fslcs401ApplicationJsonErrorEnum = {}));
var Fslcs401ApplicationJsonErrorDescriptionEnum;
(function (Fslcs401ApplicationJsonErrorDescriptionEnum) {
    Fslcs401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Fslcs401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Fslcs401ApplicationJsonErrorDescriptionEnum = exports.Fslcs401ApplicationJsonErrorDescriptionEnum || (exports.Fslcs401ApplicationJsonErrorDescriptionEnum = {}));
var Fslcs401ApplicationJson = /** @class */ (function (_super) {
    __extends(Fslcs401ApplicationJson, _super);
    function Fslcs401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fslcs401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fslcs401ApplicationJson.prototype, "errorDescription", void 0);
    return Fslcs401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Fslcs401ApplicationJson = Fslcs401ApplicationJson;
var Fslcs404ApplicationJsonErrorEnum;
(function (Fslcs404ApplicationJsonErrorEnum) {
    Fslcs404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Fslcs404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Fslcs404ApplicationJsonErrorEnum = exports.Fslcs404ApplicationJsonErrorEnum || (exports.Fslcs404ApplicationJsonErrorEnum = {}));
var Fslcs404ApplicationJsonErrorDescriptionEnum;
(function (Fslcs404ApplicationJsonErrorDescriptionEnum) {
    Fslcs404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Fslcs404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Fslcs404ApplicationJsonErrorDescriptionEnum = exports.Fslcs404ApplicationJsonErrorDescriptionEnum || (exports.Fslcs404ApplicationJsonErrorDescriptionEnum = {}));
var Fslcs404ApplicationJson = /** @class */ (function (_super) {
    __extends(Fslcs404ApplicationJson, _super);
    function Fslcs404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fslcs404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fslcs404ApplicationJson.prototype, "errorDescription", void 0);
    return Fslcs404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Fslcs404ApplicationJson = Fslcs404ApplicationJson;
var Fslcs500ApplicationJsonErrorEnum;
(function (Fslcs500ApplicationJsonErrorEnum) {
    Fslcs500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Fslcs500ApplicationJsonErrorEnum = exports.Fslcs500ApplicationJsonErrorEnum || (exports.Fslcs500ApplicationJsonErrorEnum = {}));
var Fslcs500ApplicationJsonErrorDescriptionEnum;
(function (Fslcs500ApplicationJsonErrorDescriptionEnum) {
    Fslcs500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Fslcs500ApplicationJsonErrorDescriptionEnum = exports.Fslcs500ApplicationJsonErrorDescriptionEnum || (exports.Fslcs500ApplicationJsonErrorDescriptionEnum = {}));
var Fslcs500ApplicationJson = /** @class */ (function (_super) {
    __extends(Fslcs500ApplicationJson, _super);
    function Fslcs500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fslcs500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fslcs500ApplicationJson.prototype, "errorDescription", void 0);
    return Fslcs500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Fslcs500ApplicationJson = Fslcs500ApplicationJson;
var Fslcs502ApplicationJsonErrorEnum;
(function (Fslcs502ApplicationJsonErrorEnum) {
    Fslcs502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Fslcs502ApplicationJsonErrorEnum = exports.Fslcs502ApplicationJsonErrorEnum || (exports.Fslcs502ApplicationJsonErrorEnum = {}));
var Fslcs502ApplicationJsonErrorDescriptionEnum;
(function (Fslcs502ApplicationJsonErrorDescriptionEnum) {
    Fslcs502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Fslcs502ApplicationJsonErrorDescriptionEnum = exports.Fslcs502ApplicationJsonErrorDescriptionEnum || (exports.Fslcs502ApplicationJsonErrorDescriptionEnum = {}));
var Fslcs502ApplicationJson = /** @class */ (function (_super) {
    __extends(Fslcs502ApplicationJson, _super);
    function Fslcs502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fslcs502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fslcs502ApplicationJson.prototype, "errorDescription", void 0);
    return Fslcs502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Fslcs502ApplicationJson = Fslcs502ApplicationJson;
var Fslcs503ApplicationJsonErrorEnum;
(function (Fslcs503ApplicationJsonErrorEnum) {
    Fslcs503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Fslcs503ApplicationJsonErrorEnum = exports.Fslcs503ApplicationJsonErrorEnum || (exports.Fslcs503ApplicationJsonErrorEnum = {}));
var Fslcs503ApplicationJsonErrorDescriptionEnum;
(function (Fslcs503ApplicationJsonErrorDescriptionEnum) {
    Fslcs503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Fslcs503ApplicationJsonErrorDescriptionEnum = exports.Fslcs503ApplicationJsonErrorDescriptionEnum || (exports.Fslcs503ApplicationJsonErrorDescriptionEnum = {}));
var Fslcs503ApplicationJson = /** @class */ (function (_super) {
    __extends(Fslcs503ApplicationJson, _super);
    function Fslcs503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fslcs503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fslcs503ApplicationJson.prototype, "errorDescription", void 0);
    return Fslcs503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Fslcs503ApplicationJson = Fslcs503ApplicationJson;
var Fslcs504ApplicationJsonErrorEnum;
(function (Fslcs504ApplicationJsonErrorEnum) {
    Fslcs504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Fslcs504ApplicationJsonErrorEnum = exports.Fslcs504ApplicationJsonErrorEnum || (exports.Fslcs504ApplicationJsonErrorEnum = {}));
var Fslcs504ApplicationJsonErrorDescriptionEnum;
(function (Fslcs504ApplicationJsonErrorDescriptionEnum) {
    Fslcs504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Fslcs504ApplicationJsonErrorDescriptionEnum = exports.Fslcs504ApplicationJsonErrorDescriptionEnum || (exports.Fslcs504ApplicationJsonErrorDescriptionEnum = {}));
var Fslcs504ApplicationJson = /** @class */ (function (_super) {
    __extends(Fslcs504ApplicationJson, _super);
    function Fslcs504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Fslcs504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Fslcs504ApplicationJson.prototype, "errorDescription", void 0);
    return Fslcs504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Fslcs504ApplicationJson = Fslcs504ApplicationJson;
var FslcsRequest = /** @class */ (function (_super) {
    __extends(FslcsRequest, _super);
    function FslcsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", FslcsRequestBody)
    ], FslcsRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FslcsSecurity)
    ], FslcsRequest.prototype, "security", void 0);
    return FslcsRequest;
}(utils_1.SpeakeasyBase));
exports.FslcsRequest = FslcsRequest;
var FslcsResponse = /** @class */ (function (_super) {
    __extends(FslcsResponse, _super);
    function FslcsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FslcsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FslcsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Fslcs400ApplicationJson)
    ], FslcsResponse.prototype, "fslcs400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Fslcs401ApplicationJson)
    ], FslcsResponse.prototype, "fslcs401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Fslcs404ApplicationJson)
    ], FslcsResponse.prototype, "fslcs404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Fslcs500ApplicationJson)
    ], FslcsResponse.prototype, "fslcs500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Fslcs502ApplicationJson)
    ], FslcsResponse.prototype, "fslcs502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Fslcs503ApplicationJson)
    ], FslcsResponse.prototype, "fslcs503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Fslcs504ApplicationJson)
    ], FslcsResponse.prototype, "fslcs504ApplicationJSONObject", void 0);
    return FslcsResponse;
}(utils_1.SpeakeasyBase));
exports.FslcsResponse = FslcsResponse;
