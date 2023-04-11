import { SpeakeasyBase } from "../../../internal/utils";
import { BatchAssociateApprovalRuleTemplateWithRepositoriesError } from "./batchassociateapprovalruletemplatewithrepositorieserror";
/**
 * Success
 */
export declare class BatchAssociateApprovalRuleTemplateWithRepositoriesOutput extends SpeakeasyBase {
    associatedRepositoryNames: string[];
    errors: BatchAssociateApprovalRuleTemplateWithRepositoriesError[];
}
