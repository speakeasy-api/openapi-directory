package openapisdk.models.shared;



/**
 * ReceiptAction
 * <p>An action that Amazon SES can take when it receives an email on behalf of one or more email addresses or domains that you own. An instance of this data type can represent only one action.</p> <p>For information about setting up receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-receipt-rules.html">Amazon SES Developer Guide</a>.</p>
**/
public class ReceiptAction {
    public AddHeaderAction addHeaderAction;
    public ReceiptAction withAddHeaderAction(AddHeaderAction addHeaderAction) {
        this.addHeaderAction = addHeaderAction;
        return this;
    }
    public BounceAction bounceAction;
    public ReceiptAction withBounceAction(BounceAction bounceAction) {
        this.bounceAction = bounceAction;
        return this;
    }
    public LambdaAction lambdaAction;
    public ReceiptAction withLambdaAction(LambdaAction lambdaAction) {
        this.lambdaAction = lambdaAction;
        return this;
    }
    public S3Action s3Action;
    public ReceiptAction withS3Action(S3Action s3Action) {
        this.s3Action = s3Action;
        return this;
    }
    public SnsAction snsAction;
    public ReceiptAction withSnsAction(SnsAction snsAction) {
        this.snsAction = snsAction;
        return this;
    }
    public StopAction stopAction;
    public ReceiptAction withStopAction(StopAction stopAction) {
        this.stopAction = stopAction;
        return this;
    }
    public WorkmailAction workmailAction;
    public ReceiptAction withWorkmailAction(WorkmailAction workmailAction) {
        this.workmailAction = workmailAction;
        return this;
    }
}