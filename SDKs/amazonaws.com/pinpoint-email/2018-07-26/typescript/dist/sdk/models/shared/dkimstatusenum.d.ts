/**
 * <p>The DKIM authentication status of the identity. The status can be one of the following:</p> <ul> <li> <p> <code>PENDING</code> – The DKIM verification process was initiated, and Amazon Pinpoint is still waiting for the required CNAME records to appear in the DNS configuration for the domain.</p> </li> <li> <p> <code>SUCCESS</code> – The DKIM authentication process completed successfully.</p> </li> <li> <p> <code>FAILED</code> – The DKIM authentication process failed. This can happen when Amazon Pinpoint fails to find the required CNAME records in the DNS configuration of the domain.</p> </li> <li> <p> <code>TEMPORARY_FAILURE</code> – A temporary issue is preventing Amazon Pinpoint from determining the DKIM authentication status of the domain.</p> </li> <li> <p> <code>NOT_STARTED</code> – The DKIM verification process hasn't been initiated for the domain.</p> </li> </ul>
 */
export declare enum DkimStatusEnum {
    Pending = "PENDING",
    Success = "SUCCESS",
    Failed = "FAILED",
    TemporaryFailure = "TEMPORARY_FAILURE",
    NotStarted = "NOT_STARTED"
}
