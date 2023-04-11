import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request object of DNS aliases to disassociate from an Amazon FSx for Windows File Server file system.
 */
export declare class DisassociateFileSystemAliasesRequest extends SpeakeasyBase {
    aliases: string[];
    /**
     * (Optional) An idempotency token for resource creation, in a string of up to 64 ASCII characters. This token is automatically filled on your behalf when you use the Command Line Interface (CLI) or an Amazon Web Services SDK.
     */
    clientRequestToken?: string;
    fileSystemId: string;
}
