"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./acceptportfolioshare"), exports);
__exportStar(require("./associatebudgetwithresource"), exports);
__exportStar(require("./associateprincipalwithportfolio"), exports);
__exportStar(require("./associateproductwithportfolio"), exports);
__exportStar(require("./associateserviceactionwithprovisioningartifact"), exports);
__exportStar(require("./associatetagoptionwithresource"), exports);
__exportStar(require("./batchassociateserviceactionwithprovisioningartifact"), exports);
__exportStar(require("./batchdisassociateserviceactionfromprovisioningartifact"), exports);
__exportStar(require("./copyproduct"), exports);
__exportStar(require("./createconstraint"), exports);
__exportStar(require("./createportfolio"), exports);
__exportStar(require("./createportfolioshare"), exports);
__exportStar(require("./createproduct"), exports);
__exportStar(require("./createprovisionedproductplan"), exports);
__exportStar(require("./createprovisioningartifact"), exports);
__exportStar(require("./createserviceaction"), exports);
__exportStar(require("./createtagoption"), exports);
__exportStar(require("./deleteconstraint"), exports);
__exportStar(require("./deleteportfolio"), exports);
__exportStar(require("./deleteportfolioshare"), exports);
__exportStar(require("./deleteproduct"), exports);
__exportStar(require("./deleteprovisionedproductplan"), exports);
__exportStar(require("./deleteprovisioningartifact"), exports);
__exportStar(require("./deleteserviceaction"), exports);
__exportStar(require("./deletetagoption"), exports);
__exportStar(require("./describeconstraint"), exports);
__exportStar(require("./describecopyproductstatus"), exports);
__exportStar(require("./describeportfolio"), exports);
__exportStar(require("./describeportfolioshares"), exports);
__exportStar(require("./describeportfoliosharestatus"), exports);
__exportStar(require("./describeproduct"), exports);
__exportStar(require("./describeproductasadmin"), exports);
__exportStar(require("./describeproductview"), exports);
__exportStar(require("./describeprovisionedproduct"), exports);
__exportStar(require("./describeprovisionedproductplan"), exports);
__exportStar(require("./describeprovisioningartifact"), exports);
__exportStar(require("./describeprovisioningparameters"), exports);
__exportStar(require("./describerecord"), exports);
__exportStar(require("./describeserviceaction"), exports);
__exportStar(require("./describeserviceactionexecutionparameters"), exports);
__exportStar(require("./describetagoption"), exports);
__exportStar(require("./disableawsorganizationsaccess"), exports);
__exportStar(require("./disassociatebudgetfromresource"), exports);
__exportStar(require("./disassociateprincipalfromportfolio"), exports);
__exportStar(require("./disassociateproductfromportfolio"), exports);
__exportStar(require("./disassociateserviceactionfromprovisioningartifact"), exports);
__exportStar(require("./disassociatetagoptionfromresource"), exports);
__exportStar(require("./enableawsorganizationsaccess"), exports);
__exportStar(require("./executeprovisionedproductplan"), exports);
__exportStar(require("./executeprovisionedproductserviceaction"), exports);
__exportStar(require("./getawsorganizationsaccessstatus"), exports);
__exportStar(require("./getprovisionedproductoutputs"), exports);
__exportStar(require("./importasprovisionedproduct"), exports);
__exportStar(require("./listacceptedportfolioshares"), exports);
__exportStar(require("./listbudgetsforresource"), exports);
__exportStar(require("./listconstraintsforportfolio"), exports);
__exportStar(require("./listlaunchpaths"), exports);
__exportStar(require("./listorganizationportfolioaccess"), exports);
__exportStar(require("./listportfolioaccess"), exports);
__exportStar(require("./listportfolios"), exports);
__exportStar(require("./listportfoliosforproduct"), exports);
__exportStar(require("./listprincipalsforportfolio"), exports);
__exportStar(require("./listprovisionedproductplans"), exports);
__exportStar(require("./listprovisioningartifacts"), exports);
__exportStar(require("./listprovisioningartifactsforserviceaction"), exports);
__exportStar(require("./listrecordhistory"), exports);
__exportStar(require("./listresourcesfortagoption"), exports);
__exportStar(require("./listserviceactions"), exports);
__exportStar(require("./listserviceactionsforprovisioningartifact"), exports);
__exportStar(require("./liststackinstancesforprovisionedproduct"), exports);
__exportStar(require("./listtagoptions"), exports);
__exportStar(require("./provisionproduct"), exports);
__exportStar(require("./rejectportfolioshare"), exports);
__exportStar(require("./scanprovisionedproducts"), exports);
__exportStar(require("./searchproducts"), exports);
__exportStar(require("./searchproductsasadmin"), exports);
__exportStar(require("./searchprovisionedproducts"), exports);
__exportStar(require("./terminateprovisionedproduct"), exports);
__exportStar(require("./updateconstraint"), exports);
__exportStar(require("./updateportfolio"), exports);
__exportStar(require("./updateportfolioshare"), exports);
__exportStar(require("./updateproduct"), exports);
__exportStar(require("./updateprovisionedproduct"), exports);
__exportStar(require("./updateprovisionedproductproperties"), exports);
__exportStar(require("./updateprovisioningartifact"), exports);
__exportStar(require("./updateserviceaction"), exports);
__exportStar(require("./updatetagoption"), exports);
