import { SpeakeasyBase } from "../../../internal/utils";
import { ProductViewDetail } from "./productviewdetail";
import { ProvisioningArtifactDetail } from "./provisioningartifactdetail";
import { Tag } from "./tag";
/**
 * Success
 */
export declare class CreateProductOutput extends SpeakeasyBase {
    productViewDetail?: ProductViewDetail;
    provisioningArtifactDetail?: ProvisioningArtifactDetail;
    tags?: Tag[];
}
