package shared

// SendMessageBatchResultEntryList
// Encloses a <code>MessageId</code> for a successfully-enqueued message in a <code> <a>SendMessageBatch</a>.</code>
type SendMessageBatchResultEntryList struct {
	ID                           string
	Md5OfMessageAttributes       *string
	Md5OfMessageBody             string
	Md5OfMessageSystemAttributes *string
	MessageID                    string
	SequenceNumber               *string
}
