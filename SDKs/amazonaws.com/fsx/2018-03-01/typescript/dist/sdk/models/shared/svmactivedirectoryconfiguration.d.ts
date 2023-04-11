import { SpeakeasyBase } from "../../../internal/utils";
import { SelfManagedActiveDirectoryAttributes } from "./selfmanagedactivedirectoryattributes";
/**
 * Describes the configuration of the Microsoft Active Directory (AD) directory to which the Amazon FSx for ONTAP storage virtual machine (SVM) is joined. Pleae note, account credentials are not returned in the response payload.
 */
export declare class SvmActiveDirectoryConfiguration extends SpeakeasyBase {
    netBiosName?: string;
    /**
     * The configuration of the self-managed Microsoft Active Directory (AD) directory to which the Windows File Server or ONTAP storage virtual machine (SVM) instance is joined.
     */
    selfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryAttributes;
}
