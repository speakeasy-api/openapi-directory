import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The space quota details that you want to update.
 */
export declare class ContainersQuotaList extends SpeakeasyBase {
    /**
     * The new number of public IP addresses that you want to assign to your space.
     */
    floatingIps?: number;
    /**
     * The amount of container memory that you want to assign to your space.
     */
    ram?: number;
}
