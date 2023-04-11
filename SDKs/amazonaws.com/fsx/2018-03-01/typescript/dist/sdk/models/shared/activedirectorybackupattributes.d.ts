import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Microsoft Active Directory attributes of the Amazon FSx for Windows File Server file system.
 */
export declare class ActiveDirectoryBackupAttributes extends SpeakeasyBase {
    activeDirectoryId?: string;
    domainName?: string;
    /**
     * The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>.
     */
    resourceARN?: string;
}
