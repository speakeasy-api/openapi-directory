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
exports.DipcrResponse = exports.DipcrRequest = exports.Dipcr504ApplicationJson = exports.Dipcr504ApplicationJsonErrorDescriptionEnum = exports.Dipcr504ApplicationJsonErrorEnum = exports.Dipcr503ApplicationJson = exports.Dipcr503ApplicationJsonErrorDescriptionEnum = exports.Dipcr503ApplicationJsonErrorEnum = exports.Dipcr502ApplicationJson = exports.Dipcr502ApplicationJsonErrorDescriptionEnum = exports.Dipcr502ApplicationJsonErrorEnum = exports.Dipcr500ApplicationJson = exports.Dipcr500ApplicationJsonErrorDescriptionEnum = exports.Dipcr500ApplicationJsonErrorEnum = exports.Dipcr404ApplicationJson = exports.Dipcr404ApplicationJsonErrorDescriptionEnum = exports.Dipcr404ApplicationJsonErrorEnum = exports.Dipcr401ApplicationJson = exports.Dipcr401ApplicationJsonErrorDescriptionEnum = exports.Dipcr401ApplicationJsonErrorEnum = exports.Dipcr400ApplicationJson = exports.Dipcr400ApplicationJsonErrorDescriptionEnum = exports.Dipcr400ApplicationJsonErrorEnum = exports.DipcrSecurity = exports.DipcrRequestBody = exports.DipcrRequestBodyFormatEnum = exports.DipcrRequestBodyCertificateParameters = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DipcrRequestBodyCertificateParameters = /** @class */ (function (_super) {
    __extends(DipcrRequestBodyCertificateParameters, _super);
    function DipcrRequestBodyCertificateParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=FullName" }),
        __metadata("design:type", String)
    ], DipcrRequestBodyCertificateParameters.prototype, "fullName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RollNo" }),
        __metadata("design:type", String)
    ], DipcrRequestBodyCertificateParameters.prototype, "rollNo", void 0);
    return DipcrRequestBodyCertificateParameters;
}(utils_1.SpeakeasyBase));
exports.DipcrRequestBodyCertificateParameters = DipcrRequestBodyCertificateParameters;
var DipcrRequestBodyFormatEnum;
(function (DipcrRequestBodyFormatEnum) {
    DipcrRequestBodyFormatEnum["Pdf"] = "pdf";
})(DipcrRequestBodyFormatEnum = exports.DipcrRequestBodyFormatEnum || (exports.DipcrRequestBodyFormatEnum = {}));
var DipcrRequestBody = /** @class */ (function (_super) {
    __extends(DipcrRequestBody, _super);
    function DipcrRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=certificateParameters" }),
        __metadata("design:type", DipcrRequestBodyCertificateParameters)
    ], DipcrRequestBody.prototype, "certificateParameters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=consentArtifact" }),
        __metadata("design:type", Object)
    ], DipcrRequestBody.prototype, "consentArtifact", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", String)
    ], DipcrRequestBody.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=txnId" }),
        __metadata("design:type", String)
    ], DipcrRequestBody.prototype, "txnId", void 0);
    return DipcrRequestBody;
}(utils_1.SpeakeasyBase));
exports.DipcrRequestBody = DipcrRequestBody;
var DipcrSecurity = /** @class */ (function (_super) {
    __extends(DipcrSecurity, _super);
    function DipcrSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], DipcrSecurity.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeClientId)
    ], DipcrSecurity.prototype, "clientId", void 0);
    return DipcrSecurity;
}(utils_1.SpeakeasyBase));
exports.DipcrSecurity = DipcrSecurity;
var Dipcr400ApplicationJsonErrorEnum;
(function (Dipcr400ApplicationJsonErrorEnum) {
    Dipcr400ApplicationJsonErrorEnum["MissingParameter"] = "missing_parameter";
    Dipcr400ApplicationJsonErrorEnum["InvalidParameter"] = "invalid_parameter";
    Dipcr400ApplicationJsonErrorEnum["InvalidFormat"] = "invalid_format";
    Dipcr400ApplicationJsonErrorEnum["InvalidTxnid"] = "invalid_txnid";
    Dipcr400ApplicationJsonErrorEnum["InvalidConsentid"] = "invalid_consentid";
})(Dipcr400ApplicationJsonErrorEnum = exports.Dipcr400ApplicationJsonErrorEnum || (exports.Dipcr400ApplicationJsonErrorEnum = {}));
var Dipcr400ApplicationJsonErrorDescriptionEnum;
(function (Dipcr400ApplicationJsonErrorDescriptionEnum) {
    Dipcr400ApplicationJsonErrorDescriptionEnum["PleaseProvideAllMandatoryParameters"] = "Please provide all mandatory parameters";
    Dipcr400ApplicationJsonErrorDescriptionEnum["BadRequest"] = "Bad request";
    Dipcr400ApplicationJsonErrorDescriptionEnum["TheFormatParameterIsInvalid"] = "The format parameter is invalid";
    Dipcr400ApplicationJsonErrorDescriptionEnum["TheTxnIdParameterMustBeInUuidFormat"] = "The txnId parameter must be in UUID format";
    Dipcr400ApplicationJsonErrorDescriptionEnum["TheConsentIdParameterMustBeInUuidFormat"] = "The consentId parameter must be in UUID format";
})(Dipcr400ApplicationJsonErrorDescriptionEnum = exports.Dipcr400ApplicationJsonErrorDescriptionEnum || (exports.Dipcr400ApplicationJsonErrorDescriptionEnum = {}));
var Dipcr400ApplicationJson = /** @class */ (function (_super) {
    __extends(Dipcr400ApplicationJson, _super);
    function Dipcr400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dipcr400ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dipcr400ApplicationJson.prototype, "errorDescription", void 0);
    return Dipcr400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dipcr400ApplicationJson = Dipcr400ApplicationJson;
var Dipcr401ApplicationJsonErrorEnum;
(function (Dipcr401ApplicationJsonErrorEnum) {
    Dipcr401ApplicationJsonErrorEnum["InvalidAuthentication"] = "invalid_authentication";
    Dipcr401ApplicationJsonErrorEnum["InvalidAuthorization"] = "invalid_authorization";
})(Dipcr401ApplicationJsonErrorEnum = exports.Dipcr401ApplicationJsonErrorEnum || (exports.Dipcr401ApplicationJsonErrorEnum = {}));
var Dipcr401ApplicationJsonErrorDescriptionEnum;
(function (Dipcr401ApplicationJsonErrorDescriptionEnum) {
    Dipcr401ApplicationJsonErrorDescriptionEnum["AuthenticationFailed"] = "Authentication failed";
    Dipcr401ApplicationJsonErrorDescriptionEnum["YouAreNotAuthorizedToUseThisApi"] = "You are not authorized to use this API";
})(Dipcr401ApplicationJsonErrorDescriptionEnum = exports.Dipcr401ApplicationJsonErrorDescriptionEnum || (exports.Dipcr401ApplicationJsonErrorDescriptionEnum = {}));
var Dipcr401ApplicationJson = /** @class */ (function (_super) {
    __extends(Dipcr401ApplicationJson, _super);
    function Dipcr401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dipcr401ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dipcr401ApplicationJson.prototype, "errorDescription", void 0);
    return Dipcr401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dipcr401ApplicationJson = Dipcr401ApplicationJson;
var Dipcr404ApplicationJsonErrorEnum;
(function (Dipcr404ApplicationJsonErrorEnum) {
    Dipcr404ApplicationJsonErrorEnum["RecordNotFound"] = "record_not_found";
    Dipcr404ApplicationJsonErrorEnum["UrlNotFound"] = "url_not_found";
})(Dipcr404ApplicationJsonErrorEnum = exports.Dipcr404ApplicationJsonErrorEnum || (exports.Dipcr404ApplicationJsonErrorEnum = {}));
var Dipcr404ApplicationJsonErrorDescriptionEnum;
(function (Dipcr404ApplicationJsonErrorDescriptionEnum) {
    Dipcr404ApplicationJsonErrorDescriptionEnum["NoRecordFound"] = "No record found";
    Dipcr404ApplicationJsonErrorDescriptionEnum["YourApiUrlOrPathIsIncorrect"] = "Your API url or path is incorrect";
})(Dipcr404ApplicationJsonErrorDescriptionEnum = exports.Dipcr404ApplicationJsonErrorDescriptionEnum || (exports.Dipcr404ApplicationJsonErrorDescriptionEnum = {}));
var Dipcr404ApplicationJson = /** @class */ (function (_super) {
    __extends(Dipcr404ApplicationJson, _super);
    function Dipcr404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dipcr404ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dipcr404ApplicationJson.prototype, "errorDescription", void 0);
    return Dipcr404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dipcr404ApplicationJson = Dipcr404ApplicationJson;
var Dipcr500ApplicationJsonErrorEnum;
(function (Dipcr500ApplicationJsonErrorEnum) {
    Dipcr500ApplicationJsonErrorEnum["InternalServerError"] = "internal_server_error";
})(Dipcr500ApplicationJsonErrorEnum = exports.Dipcr500ApplicationJsonErrorEnum || (exports.Dipcr500ApplicationJsonErrorEnum = {}));
var Dipcr500ApplicationJsonErrorDescriptionEnum;
(function (Dipcr500ApplicationJsonErrorDescriptionEnum) {
    Dipcr500ApplicationJsonErrorDescriptionEnum["InternalServerError"] = "Internal server error";
})(Dipcr500ApplicationJsonErrorDescriptionEnum = exports.Dipcr500ApplicationJsonErrorDescriptionEnum || (exports.Dipcr500ApplicationJsonErrorDescriptionEnum = {}));
var Dipcr500ApplicationJson = /** @class */ (function (_super) {
    __extends(Dipcr500ApplicationJson, _super);
    function Dipcr500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dipcr500ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dipcr500ApplicationJson.prototype, "errorDescription", void 0);
    return Dipcr500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dipcr500ApplicationJson = Dipcr500ApplicationJson;
var Dipcr502ApplicationJsonErrorEnum;
(function (Dipcr502ApplicationJsonErrorEnum) {
    Dipcr502ApplicationJsonErrorEnum["BadGatewy"] = "bad_gatewy";
})(Dipcr502ApplicationJsonErrorEnum = exports.Dipcr502ApplicationJsonErrorEnum || (exports.Dipcr502ApplicationJsonErrorEnum = {}));
var Dipcr502ApplicationJsonErrorDescriptionEnum;
(function (Dipcr502ApplicationJsonErrorDescriptionEnum) {
    Dipcr502ApplicationJsonErrorDescriptionEnum["PublisherServiceReturnedAnInvalidResponse"] = "Publisher service returned an invalid response";
})(Dipcr502ApplicationJsonErrorDescriptionEnum = exports.Dipcr502ApplicationJsonErrorDescriptionEnum || (exports.Dipcr502ApplicationJsonErrorDescriptionEnum = {}));
var Dipcr502ApplicationJson = /** @class */ (function (_super) {
    __extends(Dipcr502ApplicationJson, _super);
    function Dipcr502ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dipcr502ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dipcr502ApplicationJson.prototype, "errorDescription", void 0);
    return Dipcr502ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dipcr502ApplicationJson = Dipcr502ApplicationJson;
var Dipcr503ApplicationJsonErrorEnum;
(function (Dipcr503ApplicationJsonErrorEnum) {
    Dipcr503ApplicationJsonErrorEnum["ServiceUnavailable"] = "service_unavailable";
})(Dipcr503ApplicationJsonErrorEnum = exports.Dipcr503ApplicationJsonErrorEnum || (exports.Dipcr503ApplicationJsonErrorEnum = {}));
var Dipcr503ApplicationJsonErrorDescriptionEnum;
(function (Dipcr503ApplicationJsonErrorDescriptionEnum) {
    Dipcr503ApplicationJsonErrorDescriptionEnum["PublisherServiceIsTemporarilyUnavailable"] = "Publisher service is temporarily unavailable";
})(Dipcr503ApplicationJsonErrorDescriptionEnum = exports.Dipcr503ApplicationJsonErrorDescriptionEnum || (exports.Dipcr503ApplicationJsonErrorDescriptionEnum = {}));
var Dipcr503ApplicationJson = /** @class */ (function (_super) {
    __extends(Dipcr503ApplicationJson, _super);
    function Dipcr503ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dipcr503ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dipcr503ApplicationJson.prototype, "errorDescription", void 0);
    return Dipcr503ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dipcr503ApplicationJson = Dipcr503ApplicationJson;
var Dipcr504ApplicationJsonErrorEnum;
(function (Dipcr504ApplicationJsonErrorEnum) {
    Dipcr504ApplicationJsonErrorEnum["GatewayTimeout"] = "gateway_timeout";
})(Dipcr504ApplicationJsonErrorEnum = exports.Dipcr504ApplicationJsonErrorEnum || (exports.Dipcr504ApplicationJsonErrorEnum = {}));
var Dipcr504ApplicationJsonErrorDescriptionEnum;
(function (Dipcr504ApplicationJsonErrorDescriptionEnum) {
    Dipcr504ApplicationJsonErrorDescriptionEnum["PublisherServiceDidNotRespondInTime"] = "Publisher service did not respond in time";
})(Dipcr504ApplicationJsonErrorDescriptionEnum = exports.Dipcr504ApplicationJsonErrorDescriptionEnum || (exports.Dipcr504ApplicationJsonErrorDescriptionEnum = {}));
var Dipcr504ApplicationJson = /** @class */ (function (_super) {
    __extends(Dipcr504ApplicationJson, _super);
    function Dipcr504ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], Dipcr504ApplicationJson.prototype, "error", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=errorDescription" }),
        __metadata("design:type", String)
    ], Dipcr504ApplicationJson.prototype, "errorDescription", void 0);
    return Dipcr504ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Dipcr504ApplicationJson = Dipcr504ApplicationJson;
var DipcrRequest = /** @class */ (function (_super) {
    __extends(DipcrRequest, _super);
    function DipcrRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", DipcrRequestBody)
    ], DipcrRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DipcrSecurity)
    ], DipcrRequest.prototype, "security", void 0);
    return DipcrRequest;
}(utils_1.SpeakeasyBase));
exports.DipcrRequest = DipcrRequest;
var DipcrResponse = /** @class */ (function (_super) {
    __extends(DipcrResponse, _super);
    function DipcrResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DipcrResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DipcrResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dipcr400ApplicationJson)
    ], DipcrResponse.prototype, "dipcr400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dipcr401ApplicationJson)
    ], DipcrResponse.prototype, "dipcr401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dipcr404ApplicationJson)
    ], DipcrResponse.prototype, "dipcr404ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dipcr500ApplicationJson)
    ], DipcrResponse.prototype, "dipcr500ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dipcr502ApplicationJson)
    ], DipcrResponse.prototype, "dipcr502ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dipcr503ApplicationJson)
    ], DipcrResponse.prototype, "dipcr503ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Dipcr504ApplicationJson)
    ], DipcrResponse.prototype, "dipcr504ApplicationJSONObject", void 0);
    return DipcrResponse;
}(utils_1.SpeakeasyBase));
exports.DipcrResponse = DipcrResponse;
