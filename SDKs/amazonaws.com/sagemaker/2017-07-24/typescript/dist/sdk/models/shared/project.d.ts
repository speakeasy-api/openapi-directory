import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectStatusEnum } from "./projectstatusenum";
import { ServiceCatalogProvisionedProductDetails } from "./servicecatalogprovisionedproductdetails";
import { ServiceCatalogProvisioningDetails } from "./servicecatalogprovisioningdetails";
import { Tag } from "./tag";
import { UserContext } from "./usercontext";
/**
 * The properties of a project as returned by the Search API.
 */
export declare class Project extends SpeakeasyBase {
    createdBy?: UserContext;
    creationTime?: Date;
    /**
     * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
     */
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    projectArn?: string;
    projectDescription?: string;
    projectId?: string;
    projectName?: string;
    projectStatus?: ProjectStatusEnum;
    /**
     * Details of a provisioned service catalog product. For information about service catalog, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service Catalog</a>.
     */
    serviceCatalogProvisionedProductDetails?: ServiceCatalogProvisionedProductDetails;
    /**
     * Details that you specify to provision a service catalog product. For information about service catalog, see <a href="https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">What is Amazon Web Services Service Catalog</a>.
     */
    serviceCatalogProvisioningDetails?: ServiceCatalogProvisioningDetails;
    tags?: Tag[];
}
