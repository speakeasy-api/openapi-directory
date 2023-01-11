package openapisdk.models.shared;



/**
 * GetQueueUrlResult
 * For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-api-responses.html">Interpreting Responses</a> in the <i>Amazon SQS Developer Guide</i>.
**/
public class GetQueueUrlResult {
    public String queueUrl;
    public GetQueueUrlResult withQueueUrl(String queueUrl) {
        this.queueUrl = queueUrl;
        return this;
    }
}