import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the Amazon S3 Glacier response to your request.
**/
export declare class DescribeVaultOutput extends SpeakeasyBase {
    creationDate?: string;
    lastInventoryDate?: string;
    numberOfArchives?: number;
    sizeInBytes?: number;
    vaultARN?: string;
    vaultName?: string;
}
