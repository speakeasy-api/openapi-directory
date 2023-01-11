package openapisdk.models.shared;



public class DescribeAlarmHistoryOutput {
    public AlarmHistoryItem[] alarmHistoryItems;
    public DescribeAlarmHistoryOutput withAlarmHistoryItems(AlarmHistoryItem[] alarmHistoryItems) {
        this.alarmHistoryItems = alarmHistoryItems;
        return this;
    }
    public String nextToken;
    public DescribeAlarmHistoryOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}