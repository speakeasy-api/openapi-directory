import { SpeakeasyBase } from "../../../internal/utils";
import { BatchDisassociateApprovalRuleTemplateFromRepositoriesError } from "./batchdisassociateapprovalruletemplatefromrepositorieserror";
/**
 * Success
 */
export declare class BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput extends SpeakeasyBase {
    disassociatedRepositoryNames: string[];
    errors: BatchDisassociateApprovalRuleTemplateFromRepositoriesError[];
}
