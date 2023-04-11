import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectStatusEnum } from "./projectstatusenum";
import { ServiceCatalogProvisionedProductDetails } from "./servicecatalogprovisionedproductdetails";
import { ServiceCatalogProvisioningDetails } from "./servicecatalogprovisioningdetails";
import { UserContext } from "./usercontext";
/**
 * Success
 */
export declare class DescribeProjectOutput extends SpeakeasyBase {
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    createdBy?: UserContext;
    creationTime: Date;
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    projectArn: string;
    projectDescription?: string;
    projectId: string;
    projectName: string;
    projectStatus: ProjectStatusEnum;
    serviceCatalogProvisionedProductDetails?: ServiceCatalogProvisionedProductDetails;
    serviceCatalogProvisioningDetails: ServiceCatalogProvisioningDetails;
}
