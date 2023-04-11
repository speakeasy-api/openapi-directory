import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceCatalogProvisioningUpdateDetails } from "./servicecatalogprovisioningupdatedetails";
import { Tag } from "./tag";
export declare class UpdateProjectInput extends SpeakeasyBase {
    projectDescription?: string;
    projectName: string;
    serviceCatalogProvisioningUpdateDetails?: ServiceCatalogProvisioningUpdateDetails;
    tags?: Tag[];
}
