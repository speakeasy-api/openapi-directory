import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An SSH key granting access to a single repository.
 */
export declare class DeployKey extends SpeakeasyBase {
    addedBy?: string;
    createdAt: string;
    id: number;
    key: string;
    lastUsed?: string;
    readOnly: boolean;
    title: string;
    url: string;
    verified: boolean;
}
